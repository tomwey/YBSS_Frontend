import { Component, ViewChild } from '@angular/core';
import { /*IonicPage, */NavController, NavParams, Content, App } from 'ionic-angular';
// import { ApiService } from '../../provider/api-service';
import { iOSFixedScrollFreeze } from '../../provider/iOSFixedScrollFreeze';
import { Users } from '../../provider/Users';
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

  constructor(public navCtrl: NavController, 
    // private api: ApiService,
    private app: App,
    private users: Users,
    // private tools: Tools,
    // private modalCtrl: ModalController,
    // private alertCtrl: AlertController,
    private iosFixed: iOSFixedScrollFreeze,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
    this.iosFixed.fixedScrollFreeze(this.content);

  }

  forwardTo(section) {
    this.app.getRootNavs()[0].push(section.page);
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
      name: '日常检查',
      icon: 'assets/imgs/icon_daily_check.png',
      page: 'NewDailyCheckPage'
    },
    {
      name: '新增从业人员',
      icon: 'assets/imgs/icon_add_employer.png',
      page: 'NewEmployerPage'
    }
  ];

}
