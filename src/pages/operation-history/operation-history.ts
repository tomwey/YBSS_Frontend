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

  address: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.address = this.navParams.data.address;

    this.data = [
      {
        action: '实有人口',
        name: '张三',
        time: '2018-09-10 12:30',
        type: 10,
        action_name: "新增"
      },
      {
        action: '实有单位',
        name: '四川三合一科技有限公司',
        time: '2018-08-20 12:30',
        type: 20,
        action_name: "注销"
      },
      {
        action: '从业人员',
        name: '李四',
        company: '四川三合一科技有限公司',
        time: '2018-05-20 12:30',
        type: 30,
        action_name: "删除"
      },
      {
        action: '房屋日常检查',
        name: '',
        time: '2018-05-20 12:30',
        type: 40,
        action_name: "新增"
      },
      {
        action: '房屋日常检查',
        name: '',
        time: '2018-05-20 12:30',
        type: 40,
        action_name: "新增"
      },
      {
        action: '单位日常检查',
        name: '四川三合一科技有限公司',
        time: '2018-05-20 12:30',
        type: 50,
        action_name: "新增"
      },
    ];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OperationHistoryPage');
  }

}
