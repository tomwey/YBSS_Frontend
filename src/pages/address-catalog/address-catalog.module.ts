import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressCatalogPage } from './address-catalog';

@NgModule({
  declarations: [
    AddressCatalogPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressCatalogPage),
  ],
})
export class AddressCatalogPageModule {}
