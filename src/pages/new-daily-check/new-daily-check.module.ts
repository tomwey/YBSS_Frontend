import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDailyCheckPage } from './new-daily-check';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewDailyCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(NewDailyCheckPage),
    ComponentsModule
  ],
})
export class NewDailyCheckPageModule {}
