import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, tap, catchError, Subject, of, switchMap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  PaymentsListRequest,
  PaymentsListResponse,
  removeUndefinedFields,
  parseErrorMessage,
} from '@vn/internal-payments-list-util';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PaymentListService implements OnDestroy {
  readonly paymentUrl = 'http://localhost:8080/api/v1/payments';
  /** Request params for retrieving Payments list */
  readonly paymentsRequestParams = new BehaviorSubject<PaymentsListRequest>({
    page: 0,
    size: 5,
  });

  /** Unsubscribe stream */
  private destroy$ = new Subject<void>();

  constructor(
    private readonly httpClient: HttpClient,
    private _snackBar: MatSnackBar,
  ) {}

  private readonly paymentsError = new BehaviorSubject<HttpErrorResponse | undefined>(undefined);

  /** Loading stream */
  readonly loading = new BehaviorSubject(true);

  /** Error stream */
  readonly error: Observable<HttpErrorResponse | undefined> = this.paymentsError.asObservable();

  /** Payments list stream */
  readonly paymentsList: Observable<PaymentsListResponse> = this.paymentsRequestParams.pipe(
    tap(() => this.loading.next(true)),
    switchMap((params: PaymentsListRequest) => {
      return this.getPaymentsList(params);
    }),
    tap(() => this.loading.next(false)),
  );

  private getPaymentsList(params: PaymentsListRequest): Observable<any> {
    return this.getPayments(params).pipe(
      tap(() => this.loading.next(true)),
      catchError((error: HttpErrorResponse) => {
        this.paymentsError.next(error);
        const message = parseErrorMessage(error);
        this.loading.next(false);
        this.showNotification(message);
        return of(undefined);
      }),
      tap(() => this.loading.next(false)),
    );
  }

  private showNotification(header: string): void {
    this._snackBar.open(header, '', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getPayments(requestParams: PaymentsListRequest): Observable<PaymentsListResponse> {
    const params = removeUndefinedFields(requestParams);
    return this.httpClient.request<PaymentsListResponse>('GET', this.paymentUrl, { responseType: 'json', params });
  }
}
