import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

/**
 * Generated class for the ServiceHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-home',
  templateUrl: 'service-home.html',
})
export class ServiceHomePage {

  sections: any = [
    {
      id: 1,
      name: '平安乡城',
      icon: 'ios-aperture-outline',
      color: '#4990E2'
    },
    {
      id: 2,
      name: '政务公开',
      icon: 'ios-at-outline',
      color: 'rgb(27, 211, 42)'
    },
    {
      id: 3,
      name: '信息申报',
      icon: 'ios-create-outline',
      color: '#D0011B'
    },
    {
      id: 4,
      name: '地理位置',
      icon: 'ios-pin-outline',
      color: 'rgb(221, 148, 83)'
    }
  ];

  hideScan: boolean = false;
  constructor(public navCtrl: NavController,
    private app: App,
    private tools: Tools,
    private ybss: YBSS,
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ServiceHomePage');
  }

  openPage(section) {
    // console.log(section);
    switch (section.id) {
      case 1: {

      }
        break;
      case 2: {

      }
        break;
      case 3: {
        // 信息申报
        this.scan();
      }
        break;
      case 4: {
        this.app.getRootNavs()[0].push('BrowserPage',
          { title: "位置信息", url: `https://uri.amap.com/marker?position=99.799507,28.935874&name=${encodeURI('四川省甘孜藏族自治州乡城县香巴拉北路10号')}` })
      }
        break;
      default:
        break;
    }
  }

  scan() {

    this.handleScanResult(null);
    return;
    /*
        this.hideScan = true;
    
        let modal = this.modalCtrl.create("ScanPage");
        modal.onWillDismiss((text) => {
          this.hideScan = false;
        })
    
        modal.onDidDismiss((text) => {
          // this.hideScan = false;
          if (text) {
            this.handleScanResult(text);
          }
        });
        modal.present();*/
  }

  handleScanResult(text) {
    let addID = "6aec7fd56a434418a393abb1bd0eb74a";

    /*
    let reg = new RegExp(/\w{32}/);
    let arr = reg.exec(text);
    if (!arr || arr.length === 0) {
      this.tools.showToast("没有找到地址ID");
      return;
    }

    */

    this.ybss.GetAddress(addID, (res) => {
      if (Array.isArray(res)) {
        // 有下级地址
        this.app.getRootNavs()[0].push("AddressCatalogPage", { addr_info: res, from_user: '1' });
      } else {
        this.app.getRootNavs()[0].push("UserHouseDetailPage", res);
      }
    });
  }

}
