import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEmployerPage } from './new-employer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewEmployerPage,
  ],
  imports: [
    IonicPageModule.forChild(NewEmployerPage),
    ComponentsModule,
  ],
})
export class NewEmployerPageModule {}
