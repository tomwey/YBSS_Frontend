import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPropertyPage } from './edit-property';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPropertyPage),
    ComponentsModule
  ],
})
export class EditPropertyPageModule { }
