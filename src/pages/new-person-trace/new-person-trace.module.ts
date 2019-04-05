import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPersonTracePage } from './new-person-trace';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewPersonTracePage,
  ],
  imports: [
    IonicPageModule.forChild(NewPersonTracePage),
    ComponentsModule,
  ],
})
export class NewPersonTracePageModule { }
