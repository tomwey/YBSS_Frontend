import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCompanyPage } from './new-company';

@NgModule({
  declarations: [
    NewCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCompanyPage),
  ],
})
export class NewCompanyPageModule {}
