import { Component, Input } from '@angular/core';
import { Payment, PaymentStatus } from '@vn/internal-payments-list-util';

@Component({
  selector: 'vn-payments-item',
  templateUrl: './payments-item.component.html',
})
export class PaymentsItemComponent {
  paymentStatus = PaymentStatus;
  /** Initial passed item */
  @Input() payment!: Payment;
}
