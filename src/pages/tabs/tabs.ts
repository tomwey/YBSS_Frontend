import { Component } from '@angular/core';

import { HomePage } from '../home/home'; 

import { SettingPage } from '../setting/setting';
import { MyZonePage } from '../my-zone/my-zone';
import { SyncPage } from '../sync/sync';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyZonePage;
  tab3Root = SyncPage;
  tab4Root = SettingPage;

  constructor() {

  }
}
