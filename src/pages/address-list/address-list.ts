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

  address: any = null;//"乡城县马家沟村2组5号";

  units: any = [];
  unit: any = '1';

  children: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // if (this.navParams.data.children) {
    //   this.addresses = this.navParams.data.children;
    // }

    this.address = this.navParams.data;

    if (this.address && this.address.units) {
      this.units = this.address.units;
      if (this.units.length > 0) {
        this.children = this.units[0].rooms;
      }
    } else {
      this.children = this.address.children;
    }

    // if (this.navParams.data.units) {
    //   this.units = this.navParams.data.units;
    // }

    // if (this.navParams.data.address) {
    //   this.address = this.navParams.data.address;
    // }
  }

  segChanged(ev) {
    // console.log(ev);
    const index = parseInt(this.unit) - 1;
    if (index >= 0 && index < this.units.length) {
      this.children = this.units[index].rooms;
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressListPage');
  }

  openItem(item) {
    // item.name = this.address.name + item.name;
    let _address = JSON.parse(JSON.stringify(item));
    _address.name = this.address.name + item.name;
    this.navCtrl.push("AddressInfoPage", _address);
  }

  back() {
    this.navCtrl.pop();
  }

  selectAddress(item) {
    if (item.units) {
      let _address = JSON.parse(JSON.stringify(item));
      _address.name = this.address.name + item.name;
      this.navCtrl.push("AddressListPage", _address);
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
