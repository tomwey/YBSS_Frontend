import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
})
export class AddressListPage {

  address: string = "乡城县马家沟村2组5号";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressListPage');
  }

  openItem(item) {
    this.navCtrl.push("AddressInfoPage", { address: `${this.address}${item.name}` });
  }

  back() {
    this.navCtrl.pop();
  }

  addresses: any = [
    {
      name: "2栋"
    },
    {
      name: "3栋"
    },
    {
      name: "4栋"
    },
    {
      name: "5栋"
    },
    {
      name: "6栋"
    },
  ];

}
