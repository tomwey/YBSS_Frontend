import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCompanyPage } from './new-company';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCompanyPage),
    ComponentsModule,
  ],
})
export class NewCompanyPageModule {}
