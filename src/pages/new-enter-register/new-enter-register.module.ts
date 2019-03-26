import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEnterRegisterPage } from './new-enter-register';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewEnterRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(NewEnterRegisterPage),
    ComponentsModule
  ],
})
export class NewEnterRegisterPageModule { }
