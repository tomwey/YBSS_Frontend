import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperationHistoryPage } from './operation-history';

@NgModule({
  declarations: [
    OperationHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(OperationHistoryPage),
  ],
})
export class OperationHistoryPageModule {}
