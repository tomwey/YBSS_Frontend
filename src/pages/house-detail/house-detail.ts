import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Store } from '../../provider/Store';
import { Utils } from '../../provider/Utils';

/**
 * Generated class for the AddressDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-house-detail',
  templateUrl: 'house-detail.html',
})
export class HouseDetailPage {

  house: any = {};

  checks: any = [];
  people: any = [];
  employees: any = [];
  logs: any = [];
  properties: any = [];

  oper_type = "1";
  oper_types: any = [];

  constructor(public navCtrl: NavController,
    // private store: Store,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
    this.house = this.navParams.data;

    this.prepareMenus();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressDetailPage');
  }

  segmentChanged(ev) {

  }

  prepareMenus() {
    if (this.house.house_use.indexOf("居住") !== -1) {
      this.oper_types = [

        {
          ID: "1",
          name: "产权人信息"
        },
        {
          ID: "2",
          name: "实有人员"
        },
        {
          ID: "4",
          name: "日常检查"
        },
        {
          ID: "5",
          name: "操作日志"
        },
      ];
    } else if (this.house.house_use.indexOf("其他") !== -1) {
      this.oper_types = [
        {
          ID: "1",
          name: "产权人信息"
        },
        {
          ID: "4",
          name: "日常检查"
        },
        {
          ID: "5",
          name: "操作日志"
        },
      ];
    } else {
      this.oper_types = [
        {
          ID: "1",
          name: "产权人信息"
        },
        {
          ID: "2",
          name: "居住人员"
        },
        {
          ID: "3",
          name: "实有单位"
        },
        {
          ID: "4",
          name: "日常检查"
        },
        {
          ID: "5",
          name: "操作日志"
        },
      ];
    }
  }

  addDailyCheck() {
    // let modal = this.modalCtrl.create("NewDailyCheckPage")
    this.navCtrl.push("NewDailyCheckPage");
  }

  formatDate(time) {
    return Utils.dateFormat(new Date(time), "yyyy-MM-dd HH:mm:ss");
  }

  addPeople() {
    this.navCtrl.push("NewPeoplePage");
  }

  removeCheck(check) {
    this.showAlert(() => {
      // this.store.removeCheck(this.address.ID, check, () => {
      //   this.ionViewWillEnter();
      // });
    });
  }

  removePeople1(man) {
    this.showAlert(() => {
      // this.store.removePeople(this.address.ID, "1", man, () => {
      //   this.ionViewWillEnter();
      // });
    });
  }

  removePeople2(man) {
    this.showAlert(() => {
      // this.store.removePeople(this.address.ID, "2", man, () => {
      //   this.ionViewWillEnter();
      // });
    });
  }

  showAlert(cb) {
    this.alertCtrl.create({
      title: "注销提示",
      subTitle: "您确定要注销吗？",
      buttons: [
        {
          role: "Cancel",
          text: "取消"
        },
        {
          text: "确定",
          handler: () => {
            if (cb) {
              cb();
            }
          }
        }
      ]
    }).present();
  }

  addPeople2() {
    this.navCtrl.push("NewEmployerPage");
  }

  editHouse() {
    this.navCtrl.push("HouseEditPage", this.house);
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
