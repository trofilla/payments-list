import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentsListTableModule } from '@vn/internal-payments-list-feature';
// COMPONENTS
import { PaymentsListComponent } from './payments-list.component';

@NgModule({
  declarations: [PaymentsListComponent],
  imports: [CommonModule, RouterModule, PaymentsListTableModule],
  exports: [PaymentsListComponent],
})
export class PaymentsListModule {}
