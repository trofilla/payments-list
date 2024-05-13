import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { PaymentDateRangeComponent } from './payment-date-range.component';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

describe('PaymentDateRangeComponent', () => {
  let component: PaymentDateRangeComponent;
  let fixture: ComponentFixture<PaymentDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDateRangeComponent],
      imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentDateRangeComponent);
    component = fixture.componentInstance;
    component.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display form fields', () => {
    const formGroup = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
    component.range = formGroup;
    fixture.detectChanges();

    const inputs = fixture.nativeElement.querySelectorAll('input');
    expect(inputs.length).toBe(2);
  });

  it('should display error message for invalid start date', () => {
    const formGroup = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
    component.range = formGroup;
    fixture.detectChanges();

    const errorMessages = fixture.nativeElement.querySelectorAll('mat-error');
    expect(errorMessages.length).toBe(0);

    formGroup.controls.start.setErrors({ matStartDateInvalid: true });
    formGroup.controls.start.markAsTouched();

    fixture.detectChanges();

    const updatedErrorMessages = fixture.nativeElement.querySelectorAll('mat-error');
    expect(updatedErrorMessages.length).toBe(1);
    expect(updatedErrorMessages[0].textContent.trim()).toBe('Invalid start date');
  });

  it('should display error message for invalid end date', () => {
    const formGroup = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
    component.range = formGroup;
    fixture.detectChanges();

    const errorMessages = fixture.nativeElement.querySelectorAll('mat-error');
    expect(errorMessages.length).toBe(0);

    formGroup.controls.end.setErrors({ matEndDateInvalid: true });
    formGroup.controls.end.markAsTouched();
    fixture.detectChanges();

    const updatedErrorMessages = fixture.nativeElement.querySelectorAll('mat-error');
    expect(updatedErrorMessages.length).toBe(1);
    expect(updatedErrorMessages[0].textContent.trim()).toBe('Invalid end date');
  });
});
