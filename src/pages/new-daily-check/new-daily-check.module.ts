import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDailyCheckPage } from './new-daily-check';

@NgModule({
  declarations: [
    NewDailyCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(NewDailyCheckPage),
  ],
})
export class NewDailyCheckPageModule {}
