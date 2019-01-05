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

  units: any = [];
  unit: any = '1';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data.children) {
      this.addresses = this.navParams.data.children;
    }

    if (this.navParams.data.units) {
      this.units = this.navParams.data.units;
    }

    if (this.navParams.data.address) {
      this.address = this.navParams.data.address;
    }
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

  selectAddress(item) {
    if (item.children) {
      this.navCtrl.push("AddressListPage", {
        address: `${this.address}${item.name}`,
        children: item.children, units: item.units
      });
    } else {
      this.openItem(item);
    }

  }

  addresses: any = [
    {
      name: "2栋",
      people: 15,
      company: 0,
      children: [
        {
          name: "201",
          people: 2,
          company: 0
        },
        {
          name: "202",
          people: 3,
          company: 0
        },
        {
          name: "301",
          people: 2,
          company: 0
        },
        {
          name: "302",
          people: 3,
          company: 0
        },
      ],
      units: [
        {
          label: "1单元",
          value: '1'
        },
        {
          label: "2单元",
          value: '2'
        },
      ]
    },
    {
      name: "3栋",
      people: 35,
      company: 0,
      children: [
        {
          name: "201",
          people: 2,
          company: 0
        },
        {
          name: "202",
          people: 3,
          company: 0
        },
        {
          name: "301",
          people: 2,
          company: 0
        },
        {
          name: "302",
          people: 3,
          company: 0
        },
      ],
      units: [
        {
          label: "1单元",
          value: '1'
        },
        {
          label: "2单元",
          value: '2'
        },
      ]
    },
    {
      name: "4栋",
      people: 5,
      company: 3,
      children: [
        {
          name: "201",
          people: 2,
          company: 0
        },
        {
          name: "202",
          people: 3,
          company: 0
        },
        {
          name: "301",
          people: 2,
          company: 0
        },
        {
          name: "302",
          people: 3,
          company: 0
        },
      ],
      units: [
        {
          label: "1单元",
          value: '1'
        },
        {
          label: "2单元",
          value: '2'
        },
      ]
    },
    {
      name: "5栋",
      people: 115,
      company: 5,
      children: [
        {
          name: "201",
          people: 2,
          company: 0
        },
        {
          name: "202",
          people: 3,
          company: 0
        },
        {
          name: "301",
          people: 2,
          company: 0
        },
        {
          name: "302",
          people: 3,
          company: 0
        },
      ],
      units: [
        {
          label: "1单元",
          value: '1'
        },
        {
          label: "2单元",
          value: '2'
        },
      ]
    },
    {
      name: "6栋",
      people: 15,
      company: 10,
      children: [
        {
          name: "201",
          people: 2,
          company: 0
        },
        {
          name: "202",
          people: 3,
          company: 0
        },
        {
          name: "301",
          people: 2,
          company: 0
        },
        {
          name: "302",
          people: 3,
          company: 0
        },
      ],
      units: [
        {
          label: "1单元",
          value: '1'
        },
        {
          label: "2单元",
          value: '2'
        },
      ]
    },

  ];

}
