import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { map, Observable, of, Subject } from 'rxjs';
import { PaymentListService } from '@vn/internal-payments-data-access';
import { PaymentsListRequest } from '@vn/internal-payments-list-util';

@Component({
  selector: 'vn-payments-list-table',
  templateUrl: './payments-list-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsListTableComponent implements OnDestroy {
  /** Current page */
  page = 0;

  constructor(private readonly paymentListService: PaymentListService) {}

  private readonly destroy$ = new Subject<void>();

  /** Flag is list can be viewed by policy stream */
  readonly canViewPaymentsList$ = of(true);

  readonly paymentsList$: Observable<any> = this.paymentListService.paymentsList.pipe(map(value => value || []));
  readonly loading$: Observable<boolean> = this.paymentListService.loading;
  readonly error$: Observable<HttpErrorResponse | undefined> = this.paymentListService.error;

  /**
   * Page change event handler
   * @param page - page index
   */
  onPageChange(page: number): void {
    this.page = page;
    this.paymentListService.paymentsRequestParams.next({
      ...this.paymentListService.paymentsRequestParams.value,
      page,
    });
  }
  /**
   * Page change event handler
   * @param filtersParams - user's params to filter the list
   */
  applyFilters(filtersParams: PaymentsListRequest) {
    this.paymentListService.paymentsRequestParams.next({
      ...filtersParams,
      page: 0,
      size: 5,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
