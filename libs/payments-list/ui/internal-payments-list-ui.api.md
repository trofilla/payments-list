## API Report File for "@vn/internal-payments-list-ui"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i5 from '@angular/platform-browser/animations';
import * as i5_2 from '@angular/platform-browser';
import * as i6 from '@angular/material/datepicker';
import * as i6_2 from '@angular/material/select';
import * as i7 from '@angular/material/core';
import * as i7_2 from '@angular/material/button';
import * as i8 from '@angular/material/form-field';
import * as i9 from '@angular/material/input';
import { Payment } from '@vn/internal-payments-list-util';
import { PaymentsListRequest } from '@vn/internal-payments-list-util';
import { PaymentStatus } from '@vn/internal-payments-list-util';

// @public (undocumented)
export class PaymentDateRangeComponent {
    // (undocumented)
    maxDate: Date;
    range: FormGroup;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentDateRangeComponent, "vn-payment-date-range", never, { "range": { "alias": "range"; "required": false; }; }, {}, never, never, false, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentDateRangeComponent, never>;
}

// @public (undocumented)
export class PaymentDateRangeModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentDateRangeModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<PaymentDateRangeModule>;
    // Warning: (ae-forgotten-export) The symbol "i1_3" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<PaymentDateRangeModule, [typeof i1_3.PaymentDateRangeComponent], [typeof i2.CommonModule, typeof i3.FormsModule, typeof i3.ReactiveFormsModule, typeof i5.BrowserAnimationsModule, typeof i5_2.BrowserModule, typeof i6.MatDatepickerModule, typeof i7.MatNativeDateModule, typeof i8.MatFormFieldModule, typeof i9.MatInputModule], [typeof i1_3.PaymentDateRangeComponent]>;
}

// @public (undocumented)
export class PaymentsItemComponent {
    payment: Payment;
    // (undocumented)
    paymentStatus: typeof PaymentStatus;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentsItemComponent, "vn-payments-item", never, { "payment": { "alias": "payment"; "required": false; }; }, {}, never, never, false, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentsItemComponent, never>;
}

// @public (undocumented)
export class PaymentsItemModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentsItemModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<PaymentsItemModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<PaymentsItemModule, [typeof i1.PaymentsItemComponent], [typeof i2.CommonModule], [typeof i1.PaymentsItemComponent]>;
}

// @public (undocumented)
export class PaymentsQuickFiltersComponent {
    apply(): void;
    clearAll(): void;
    // (undocumented)
    paymentStatus: typeof PaymentStatus;
    quickFiltersChanged: EventEmitter<PaymentsListRequest>;
    range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    // (undocumented)
    selectedOptions: PaymentStatus | undefined;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentsQuickFiltersComponent, "vn-payment-quick-filters", never, {}, { "quickFiltersChanged": "quickFiltersChanged"; }, never, never, false, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentsQuickFiltersComponent, never>;
}

// @public (undocumented)
export class PaymentsQuickFiltersModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentsQuickFiltersModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<PaymentsQuickFiltersModule>;
    // Warning: (ae-forgotten-export) The symbol "i1_2" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "i4" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<PaymentsQuickFiltersModule, [typeof i1_2.PaymentsQuickFiltersComponent], [typeof i2.CommonModule, typeof i3.FormsModule, typeof i3.ReactiveFormsModule, typeof i4.PaymentDateRangeModule, typeof i5.BrowserAnimationsModule, typeof i6_2.MatSelectModule, typeof i7_2.MatButtonModule], [typeof i1_2.PaymentsQuickFiltersComponent]>;
}

// (No @packageDocumentation comment for this package)

```