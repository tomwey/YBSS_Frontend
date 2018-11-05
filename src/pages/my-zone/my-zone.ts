import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the MyZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-my-zone',
  templateUrl: 'my-zone.html',
})
export class MyZonePage {

  listData: any = [
    {
      name: '交通村',
      house_count: 3245,
      people_count: 23948,
      company_count: 324,
    },
    {
      name: '市中区',
      house_count: 3245,
      people_count: 23948,
      company_count: 324,
    },
    {
      name: '战旗村',
      house_count: 3245,
      people_count: 23948,
      company_count: 324,
    },
    {
      name: '凤凰山街道',
      house_count: 3245,
      people_count: 23948,
      company_count: 324,
    },
    {
      name: '青羊区',
      house_count: 3245,
      people_count: 23948,
      company_count: 324,
    },
    {
      name: '平头乡',
      house_count: 3245,
      people_count: 23948,
      company_count: 324,
    },
  ];
  constructor(public navCtrl: NavController, 
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyZonePage');
  }

  onClick(item) {
    this.app.getRootNavs()[0].push('ZoneListPage', item);
  }

}
