import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPeoplePage } from './new-people';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(NewPeoplePage),
    ComponentsModule
  ],
})
export class NewPeoplePageModule {}
