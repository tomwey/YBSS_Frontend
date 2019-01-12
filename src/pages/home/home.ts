import { Component, ViewChild } from '@angular/core';
import { /*IonicPage, */NavController, NavParams, Content, App, ModalController } from 'ionic-angular';
// import { ApiService } from '../../provider/api-service';
import { iOSFixedScrollFreeze } from '../../provider/iOSFixedScrollFreeze';
// import { Users } from '../../provider/Users';
// import { ApiService } from '../../provider/api-service';
import { YBSS } from '../../provider/YBSS';
// import { ComponentsModule } from '../../components/components.module';
// import { Tools } from '../../provider/Tools';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // @ViewChild('slides') slides: Slides;
  @ViewChild(Content) content: Content;

  addresses: any = [];
  hideScan: boolean = false;

  constructor(public navCtrl: NavController,
    // private api: ApiService,
    private app: App,
    private modalCtrl: ModalController,
    // private users: Users,
    // private tools: Tools,
    // private modalCtrl: ModalController,
    // private alertCtrl: AlertController,
    // private api: ApiService,
    private ybss: YBSS,
    private iosFixed: iOSFixedScrollFreeze,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
    this.iosFixed.fixedScrollFreeze(this.content);
    // this.api.GetLocalData("assets/configs/addresses.json", (data) => {
    //   // console.log(data);
    //   this.addresses = data;
    // });
  }

  forwardTo(section) {
    this.app.getRootNavs()[0].push(section.page, section.params);
  }

  handleScanResult(text) {
    let arr = text.split("；");
    if (arr.length > 1) {
      let address = arr[1];
      let arr2 = address.split("：");
      if (arr2.length > 1) {
        let addrid = arr2[1];

        this.ybss.GetHouse(addrid, (res) => {
          // console.log(res);
          this.app.getRootNavs()[0].push("HouseDetailPage", res);
        });
      }
    }
  }

  scan() {
    this.hideScan = true;

    let modal = this.modalCtrl.create("ScanPage");
    modal.onWillDismiss((text) => {
      this.hideScan = false;
      // if (text) {
      //   this.handleScanResult(text);
      // }
    })

    modal.onDidDismiss((text) => {
      // this.hideScan = false;
      if (text) {
        this.handleScanResult(text);
      }
    });
    modal.present();
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
    }
  ];

}
