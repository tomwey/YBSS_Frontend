import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { SettingPage } from '../setting/setting';
// import { MyZonePage } from '../my-zone/my-zone';
import { SyncPage } from '../sync/sync';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = 'ZoneListPage';
  // tab3Root = SyncPage;
  tab3Root = 'ServiceHomePage';
  tab4Root = SettingPage;

  constructor() {

  }
}
