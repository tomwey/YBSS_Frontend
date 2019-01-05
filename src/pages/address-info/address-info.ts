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

  address: any = null;//"乡城县马家沟村3组13号";
  room: any = null;

  constructor(public navCtrl: NavController,
    private app: App,
    public navParams: NavParams) {
    // if (this.navParams.data) {
    this.address = this.navParams.data;
    this.room = this.address.room || this.address;

    if (this.room.usetypeid === "1") {
      // 自住
      this.sections = [
        {
          name: '查看房屋详情',
          icon: 'assets/imgs/icon_view_detail.png',
          page: 'HouseDetailPage'
        },
        {
          name: '新增实有人',
          icon: 'assets/imgs/icon_add_person.png',
          page: 'NewPeoplePage'
        },
        {
          name: '最近操作历史',
          icon: 'assets/imgs/icon_oper_history.png',
          page: 'OperationHistoryPage'
        },
        {
          name: '日常检查',
          icon: 'assets/imgs/icon_daily_check.png',
          page: 'NewDailyCheckPage',
          params: { type: 1 }
        },
      ];
    } else if (this.room.usetypeid === "2") {
      this.sections = [
        {
          name: '查看房屋详情',
          icon: 'assets/imgs/icon_view_detail.png',
          page: 'HouseDetailPage'
        },
        {
          name: '新增实有单位',
          icon: 'assets/imgs/icon_add_company.png',
          page: 'NewCompanyPage'
        },
        {
          name: '新增从业人员',
          icon: 'assets/imgs/icon_add_employer.png',
          page: 'NewEmployerPage'
        },
        {
          name: '最近操作历史',
          icon: 'assets/imgs/icon_oper_history.png',
          page: 'OperationHistoryPage'
        },
        {
          name: '日常检查',
          icon: 'assets/imgs/icon_daily_check.png',
          page: 'NewDailyCheckPage',
          params: { type: 2 }
        },
      ];
      // 商用
    } else if (this.room.usetypeid === "3") {
      // 商住
      this.sections = [
        {
          name: '查看房屋详情',
          icon: 'assets/imgs/icon_view_detail.png',
          page: 'HouseDetailPage'
        },
        {
          name: '新增实有单位',
          icon: 'assets/imgs/icon_add_company.png',
          page: 'NewCompanyPage'
        },
        {
          name: '新增居住人员',
          icon: 'assets/imgs/icon_add_person.png',
          page: 'NewPeoplePage'
        },
        {
          name: '新增从业人员',
          icon: 'assets/imgs/icon_add_employer.png',
          page: 'NewEmployerPage'
        },
        {
          name: '最近操作历史',
          icon: 'assets/imgs/icon_oper_history.png',
          page: 'OperationHistoryPage'
        },
        {
          name: '日常检查',
          icon: 'assets/imgs/icon_daily_check.png',
          page: 'NewDailyCheckPage',
          params: { type: 1 }
        },

      ];
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressInfoPage');
  }

  back() {
    this.navCtrl.pop();
  }

  forwardTo(section) {
    // if (section.page === "OperationHistoryPage" ||
    //   section.page === "HouseDetailPage") {
    //   section.params = { address: this.address };
    // }
    this.app.getRootNavs()[0].push(section.page, this.address);
  }

  sections: any = [
    {
      name: '查看房屋详情',
      icon: 'assets/imgs/icon_view_detail.png',
      page: 'HouseDetailPage'
    },
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
      name: '日常检查',
      icon: 'assets/imgs/icon_daily_check.png',
      page: 'NewDailyCheckPage',
      params: { type: 1 }
    },
    {
      name: '新增从业人员',
      icon: 'assets/imgs/icon_add_employer.png',
      page: 'NewEmployerPage'
    },
  ];

}
