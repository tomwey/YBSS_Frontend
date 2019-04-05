import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

/**
 * Generated class for the CompanyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-detail',
  templateUrl: 'company-detail.html',
})
export class CompanyDetailPage {

  house: any;
  company: any;
  constructor(public navCtrl: NavController,
    private tools: Tools,
    private ybss: YBSS,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
    this.house = this.navParams.data.house;
    this.company = this.navParams.data.company;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CompanyDetailPage');
  }

  addEmployee() {
    this.navCtrl.push("NewEmployerPage", { company: this.company });
  }

  removeItem(ev, item) {
    this.showAlert(() => {
      this.ybss.SaveEmp(this.company.id, item.id, { state: 1 }, (res) => {
        this.tools.showToast("注销成功。");
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            const element = res[key];
            this.company[key] = element;
          }
        }
        // this.navCtrl.pop();
      });
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

}
