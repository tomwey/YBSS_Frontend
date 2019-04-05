import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManCheckPage } from './man-check';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(ManCheckPage),
    ComponentsModule,
  ],
})
export class ManCheckPageModule { }
