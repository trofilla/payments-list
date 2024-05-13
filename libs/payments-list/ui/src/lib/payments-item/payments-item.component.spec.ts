import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsItemComponent } from './payments-item.component';
import { Payment, PaymentStatus } from '@vn/internal-payments-list-util';

describe('PaymentsItemComponent', () => {
  let component: PaymentsItemComponent;
  let fixture: ComponentFixture<PaymentsItemComponent>;

  const payment: Payment = {
    id: '1',
    description: 'Payment 1',
    amount: 100.5,
    currency: 'USD',
    createdAt: new Date(),
    status: PaymentStatus.COMPLETED,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsItemComponent);
    component = fixture.componentInstance;
    component.payment = payment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render payment details', () => {
    const moment = require('moment');

    const payment: Payment = {
      id: '3',
      description: 'Payment 34',
      amount: 100.5,
      currency: 'USD',
      createdAt: new Date(),
      status: PaymentStatus.CAPTURED,
    };

    component.payment = payment;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col-md-6').textContent).toContain(payment.description);
    expect(compiled.querySelector('.col-md-2').textContent).toContain(payment.amount.toFixed(2));
    expect(compiled.querySelector('.col-md-1').textContent).toContain(payment.currency);
    expect(compiled.querySelector('[data-role="payments-item__date"]').textContent.trim()).toContain(
      moment(new Date()).format('M/D/YY'),
    );
    expect(compiled.querySelector('[data-role="payments-item__status"]').textContent).toContain(payment.status);
  });
});
