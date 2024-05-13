import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PaymentDateRangeComponent } from './payment-date-range.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components = [PaymentDateRangeComponent];
const uiModules = [
  BrowserAnimationsModule,
  BrowserModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...uiModules],
  exports: [...components],
})
export class PaymentDateRangeModule {}
