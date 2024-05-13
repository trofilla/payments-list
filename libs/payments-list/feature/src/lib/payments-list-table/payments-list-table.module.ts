import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { PaymentsListTableComponent } from './payments-list-table.component';
import { PaymentListService } from '@vn/internal-payments-data-access';
import { PaymentsItemModule, PaymentsQuickFiltersModule } from '@vn/internal-payments-list-ui';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

const components = [PaymentsListTableComponent];
const uiModule = [
  PaymentsItemModule,
  PaymentsQuickFiltersModule,
  NgbPaginationModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatIconModule,
];
@NgModule({
  declarations: [...components],
  imports: [...uiModule, CommonModule],
  providers: [PaymentListService],
  exports: [...components],
})
export class PaymentsListTableModule {}
