import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseEditPage } from './house-edit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HouseEditPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseEditPage),
    ComponentsModule,
  ],
})
export class HouseEditPageModule { }
