import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the ZoneListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-list',
  templateUrl: 'zone-list.html',
})
export class ZoneListPage {

  originData: any = [];
  keywords: any = '';
  title: any = '我的管辖';
  constructor(public navCtrl: NavController, 
    private app: App,
    public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.title = this.navParams.data.item.name;
    }

    if (this.navParams.data.data) {
      this.listData = this.navParams.data.data;
    }

    this.originData = this.listData;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ZoneListPage');
  }

  startSearch(kw) {
    if (kw.trim() == '') {
      this.listData = this.originData;
      return;
    }

    this.listData = this.originData.filter(item => {
      return item.name.indexOf(kw.trim().toLowerCase()) > -1;
    });
  }

  onClick(item) {
    let data: any = [
    {
      name: '内江市市中区安居街20号',
      house_count: 345,
      people_count: 948,
      company_count: 324,
    },
    {
      name: '内江市市中区安居街21号',
      house_count: 325,
      people_count: 248,
      company_count: 324,
    },
    {
      name: '内江市市中区安居街30号',
      house_count: 345,
      people_count: 2948,
      company_count: 324,
    },
    {
      name: '内江市市中区安居街23号',
      house_count: 245,
      people_count: 2348,
      company_count: 324,
    },
    {
      name: '内江市市中区安居街40号',
      house_count: 345,
      people_count: 3948,
      company_count: 324,
    },
    {
      name: '内江市市中区安居街41号',
      house_count: 45,
      people_count: 248,
      company_count: 324,
    },
  ];

    this.app.getRootNavs()[0].push('ZoneListPage', { item: item, data: data });
  }

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

}
