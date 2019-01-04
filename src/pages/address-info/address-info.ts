import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the AddressInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-info',
  templateUrl: 'address-info.html',
})
export class AddressInfoPage {

  address: any = "乡城县马家沟村3组13号";
  constructor(public navCtrl: NavController,
    private app: App,
    public navParams: NavParams) {
    if (this.navParams.data.address) {
      this.address = this.navParams.data.address;
    };
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressInfoPage');
  }

  back() {
    this.navCtrl.pop();
  }

  forwardTo(section) {
    this.app.getRootNavs()[0].push(section.page, section.params);
  }

  sections: any = [
    // {
    //   name: '实有房屋编辑',
    //   icon: 'assets/imgs/icon_house.png',
    //   page: ''
    // },
    {
      name: '新增实有人',
      icon: 'assets/imgs/icon_add_person.png',
      page: 'NewPeoplePage'
    },
    {
      name: '新增实有单位',
      icon: 'assets/imgs/icon_add_company.png',
      page: 'NewCompanyPage'
    },
    {
      name: '最近操作历史',
      icon: 'assets/imgs/icon_oper_history.png',
      page: 'OperationHistoryPage'
    },
    {
      name: '房屋日常检查',
      icon: 'assets/imgs/icon_daily_check.png',
      page: 'NewDailyCheckPage',
      params: { type: 1 }
    },
    {
      name: '单位日常检查',
      icon: 'assets/imgs/icon_daily_check.png',
      page: 'NewDailyCheckPage',
      params: { type: 2 }
    },
    {
      name: '新增从业人员',
      icon: 'assets/imgs/icon_add_employer.png',
      page: 'NewEmployerPage'
    },
    // {
    //   name: '下级地址',
    //   icon: 'assets/imgs/icon_child_list.png',
    //   page: 'AddressListPage'
    // }
  ];

}
