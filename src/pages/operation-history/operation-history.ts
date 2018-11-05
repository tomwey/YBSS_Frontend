import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OperationHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operation-history',
  templateUrl: 'operation-history.html',
})
export class OperationHistoryPage {

  error: any = null;
  data: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = [
      {
        action: '新增实有人口',
        address: '内江市中区安居街38号',
        time: '2018-09-10 12:30',
        type: 10,
      },
      {
        action: '新增实有单位',
        address: '内江市中区安居街25号',
        time: '2018-08-20 12:30',
        type: 20,
      },
      {
        action: '新增从业人员',
        address: '四川内江雅居实业有限公司',
        time: '2018-05-20 12:30',
        type: 30,
      },
      {
        action: '房屋日常检查',
        address: '内江市中区安居街25号',
        time: '2018-05-20 12:30',
        type: 40,
      },
      {
        action: '房屋日常检查',
        address: '内江市中区安居街25号',
        time: '2018-05-20 12:30',
        type: 40,
      },
      {
        action: '单位日常检查',
        address: '四川内江雅居实业有限公司',
        time: '2018-05-20 12:30',
        type: 50,
      },
    ];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OperationHistoryPage');
  }

}
