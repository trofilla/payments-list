import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vn-payment-date-range',
  templateUrl: './payment-date-range.component.html',
})
export class PaymentDateRangeComponent {
  maxDate: Date = new Date();
  /** Form group to handle data */
  @Input() range!: FormGroup;
}
