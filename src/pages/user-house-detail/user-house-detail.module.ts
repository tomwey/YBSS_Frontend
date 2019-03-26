import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserHouseDetailPage } from './user-house-detail';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    UserHouseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserHouseDetailPage),
    IonicImageViewerModule
  ],
})
export class UserHouseDetailPageModule { }
