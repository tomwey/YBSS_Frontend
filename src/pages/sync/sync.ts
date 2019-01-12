import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SyncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-sync',
  templateUrl: 'sync.html',
})
export class SyncPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SyncPage');
  }
  error: any = "暂无数据"
  data: any = [
    // {
    //   address: '市中区西一路33号',
    //   change: '修改房屋信息',
    //   time: '18-10-10 12:40'
    // },
    // {
    //   address: '市中区西一路33号',
    //   change: '新增实有人',
    //   time: '18-10-10 12:40'
    // },
    // {
    //   address: '市中区西一路33号',
    //   change: '新增实有单位',
    //   time: '18-10-10 12:40'
    // },
    // {
    //   address: '市中区西一路33号',
    //   change: '日常检查',
    //   time: '18-10-10 12:40'
    // },
  ];

}
