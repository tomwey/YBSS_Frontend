import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceHomePage } from './service-home';

@NgModule({
  declarations: [
    ServiceHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceHomePage),
  ],
})
export class ServiceHomePageModule {}
