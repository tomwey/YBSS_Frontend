import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEmployerPage } from './new-employer';

@NgModule({
  declarations: [
    NewEmployerPage,
  ],
  imports: [
    IonicPageModule.forChild(NewEmployerPage),
  ],
})
export class NewEmployerPageModule {}
