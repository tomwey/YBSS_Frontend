import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeletePage } from './delete';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DeletePage,
  ],
  imports: [
    IonicPageModule.forChild(DeletePage),
    ComponentsModule,
  ],
})
export class DeletePageModule { }
