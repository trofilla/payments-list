import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsItemComponent } from './payments-item.component';

const uiModules = [CommonModule];
const components = [PaymentsItemComponent];

@NgModule({
  declarations: [...components],
  imports: [...uiModules],
  exports: [...components],
})
export class PaymentsItemModule {}
