import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsQuickFiltersComponent } from './payment-quick-filters.component';
import { PaymentStatus } from '@vn/internal-payments-list-util';

describe('PaymentsQuickFiltersComponent', () => {
  let component: PaymentsQuickFiltersComponent;
  let fixture: ComponentFixture<PaymentsQuickFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsQuickFiltersComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsQuickFiltersComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter params on apply', () => {
    const moment = require('moment');
    const filterParams = {
      createdAtStart: moment('2022-01-01').format('YYYY-MM-DD'),
      createdAtEnd: moment('2022-01-31').format('YYYY-MM-DD'),
      status: PaymentStatus.COMPLETED,
    };

    const emitSpy = jest.spyOn(component.quickFiltersChanged, 'emit');
    component.selectedOptions = PaymentStatus.COMPLETED;
    component.range.setValue({
      start: moment('2022-01-01').toDate(),
      end: moment('2022-01-31').toDate(),
    });
    component.apply();
    expect(emitSpy).toHaveBeenCalledWith(filterParams);
  });

  it('should emit undefined on clearAll', () => {
    const moment = require('moment');

    const emitSpy = jest.spyOn(component.quickFiltersChanged, 'emit');
    component.selectedOptions = PaymentStatus.COMPLETED;
    component.range.setValue({
      start: moment('2022-01-01').toDate(),
      end: moment('2022-01-31').toDate(),
    });
    component.clearAll();
    expect(emitSpy).toHaveBeenCalledWith(undefined);
  });
});
