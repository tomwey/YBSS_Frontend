import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCompanyPage } from './edit-company';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCompanyPage),
    ComponentsModule,
  ],
})
export class EditCompanyPageModule { }
