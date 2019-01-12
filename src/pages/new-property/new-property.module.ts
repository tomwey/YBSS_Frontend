import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPropertyPage } from './new-property';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPropertyPage),
    ComponentsModule
  ],
})
export class NewPropertyPageModule { }
