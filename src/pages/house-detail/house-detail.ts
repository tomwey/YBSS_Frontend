import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Store } from '../../provider/Store';
import { Utils } from '../../provider/Utils';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

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

  houseUse: number = 1;

  address: string;

  constructor(public navCtrl: NavController,
    // private store: Store,
    private alertCtrl: AlertController,
    private tools: Tools,
    private ybss: YBSS,
    public navParams: NavParams) {
    this.house = this.navParams.data;

    this.address = this.house.address;

    this.prepareMenus();
    this.calcHouseUse();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressDetailPage');
  }

  segmentChanged(ev) {

  }

  calcHouseUse() {
    if (this.house.house_use.indexOf("居住") !== -1) {
      this.houseUse = 1;
    } else if (this.house.house_use.indexOf("其他") !== -1) {
      this.houseUse = 3;
    } else {
      this.houseUse = 2;
    }
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

  removeItem(ev: Event, item, className) {
    ev.stopPropagation();

    this.showAlert(() => {
      this.ybss.SaveObj(this.house.id, item.id, className, {
        state: 1
      }, null, (res) => {
        this.tools.showToast("注销成功！");
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            const element = res[key];
            this.house[key] = element;
          }
        }
      });
    });
  }

  addProperty(item = null) {
    let id = null;
    if (item) {
      id = item.id;
    }
    this.navCtrl.push("NewPropertyPage", { house: this.house, id: id });
  }

  addDailyCheck(item = null) {
    // let modal = this.modalCtrl.create("NewDailyCheckPage")
    let id = null;
    if (item) {
      id = item.id;
    }
    this.navCtrl.push("NewDailyCheckPage", { house: this.house, id: id, type: this.houseUse === 2 ? "0" : "1" });
  }

  gotoCompany(item) {
    this.navCtrl.push("CompanyDetailPage", { house: this.house, company: item });
  }

  formatDate(time) {
    return Utils.dateFormat(new Date(time), "yyyy-MM-dd HH:mm:ss");
  }

  savePerson(item = null) {
    let id = null;
    if (item) {
      id = item.id;
    }
    this.navCtrl.push("NewPeoplePage", { house: this.house, id: id });
  }

  addCompany(item = null) {
    let id = null;
    if (item) {
      id = item.id;
    }
    this.navCtrl.push("NewCompanyPage", { house: this.house, id: id });
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
