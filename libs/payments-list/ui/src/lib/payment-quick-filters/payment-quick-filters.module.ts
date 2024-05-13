import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsQuickFiltersComponent } from './payment-quick-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentDateRangeModule } from '../payment-date-range/payment-date-range.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const uiModules = [
  FormsModule,
  ReactiveFormsModule,
  PaymentDateRangeModule,
  BrowserAnimationsModule,
  MatSelectModule,
  MatButtonModule,
];
const components = [PaymentsQuickFiltersComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...uiModules],
  exports: [...components],
})
export class PaymentsQuickFiltersModule {}
