import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPeoplePage } from './edit-people';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(EditPeoplePage),
    ComponentsModule
  ],
})
export class EditPeoplePageModule { }
