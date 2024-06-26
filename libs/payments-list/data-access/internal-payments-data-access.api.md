## API Report File for "@vn/internal-payments-data-access"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { PaymentsListRequest } from '@vn/internal-payments-list-util';
import { PaymentsListResponse } from '@vn/internal-payments-list-util';

// @public (undocumented)
export class PaymentListService implements OnDestroy {
    constructor(httpClient: HttpClient, _snackBar: MatSnackBar);
    readonly error: Observable<HttpErrorResponse | undefined>;
    // (undocumented)
    getPayments(requestParams: PaymentsListRequest): Observable<PaymentsListResponse>;
    readonly loading: BehaviorSubject<boolean>;
    // (undocumented)
    ngOnDestroy(): void;
    readonly paymentsList: Observable<PaymentsListResponse>;
    readonly paymentsRequestParams: BehaviorSubject<PaymentsListRequest>;
    // (undocumented)
    paymentUrl: string;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentListService, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<PaymentListService>;
}

// (No @packageDocumentation comment for this package)

```
