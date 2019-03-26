import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewLeaveRegisterPage } from './new-leave-register';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewLeaveRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(NewLeaveRegisterPage),
    ComponentsModule
  ],
})
export class NewLeaveRegisterPageModule { }
