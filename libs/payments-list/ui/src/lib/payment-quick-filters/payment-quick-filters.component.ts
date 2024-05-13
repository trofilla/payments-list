import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentsListRequest, PaymentStatus } from '@vn/internal-payments-list-util';
import moment from 'moment';

@Component({
  selector: 'vn-payment-quick-filters',
  templateUrl: './payment-quick-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsQuickFiltersComponent {
  paymentStatus = PaymentStatus;
  selectedOptions: PaymentStatus | undefined = undefined;
  /**
   * Create a form group to handle date changes
   */
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  /**
   * Propagate selected quick filters types
   */
  @Output() quickFiltersChanged = new EventEmitter<PaymentsListRequest>();
  /**
   * Fully clear the filters
   */
  clearAll() {
    this.range.reset();
    this.selectedOptions = undefined;
    this.quickFiltersChanged.emit(undefined);
  }

  /**
   * Apply the filters to the parent component
   */
  apply() {
    const filterParams = {
      createdAtStart: this.range.value.start ? moment(this.range.value.start).format('YYYY-MM-DD') : undefined,
      createdAtEnd: this.range.value.end ? moment(this.range.value.end).format('YYYY-MM-DD') : undefined,
      status: this.selectedOptions,
    };

    this.quickFiltersChanged.emit(filterParams);
  }
}
