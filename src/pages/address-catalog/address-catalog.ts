import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-catalog',
  templateUrl: 'address-catalog.html',
})
export class AddressCatalogPage {

  addrInfo: any = [];

  buildings: any = [];
  units: any = [];
  rooms: any = [];

  buildingUnits: any = {};
  unitHouses: any = {};
  roomNoHouses: any = {};

  currUnit: any;
  currBuilding: any;

  address: any;
  // roomsData: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addrInfo = this.navParams.data.addr_info;

    if (this.addrInfo.length > 0) {
      this.address = this.addrInfo[0].address;
    }

    // console.log(this.addrInfo);
    this.handleData();
  }

  handleData() {
    this.addrInfo.forEach(room => {
      if (this.buildings.indexOf(room.building_name) === -1) {
        this.buildings.push(room.building_name);
      }
      // let builds = this.roomsData
      let units = this.buildingUnits[room.building_name] || [];
      if (units.indexOf(room.unit_name) === -1) {
        units.push(room.unit_name);
      }

      this.buildingUnits[room.building_name] = units;

      let key = `${room.building_name}-${room.unit_name}`;
      let rooms = this.unitHouses[key] || [];
      if (rooms.indexOf(room.room_no) === -1) {
        rooms.push(room.room_no);
        let key2 = `${room.building_name}-${room.unit_name}-${room.room_no}`;
        this.roomNoHouses[key2] = room.house;
      }

      this.unitHouses[key] = rooms;
    });

    if (this.buildings.length > 0) {
      this.currBuilding = this.buildings[0];
      this.changeBuilding(this.currBuilding);
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressCatalogPage');
  }

  changeBuilding(bName) {
    this.units = JSON.parse(JSON.stringify(this.buildingUnits[bName]));

    this.currBuilding = bName;

    console.log(this.units);

    if (this.units.length > 0) {
      this.currUnit = this.units[0];
      // this.rooms = this.unitHouses[this.currUnit];
    }

    // console.log(this.currUnit);

    this.changeUnit(this.currUnit);
  }

  gotoHouse(room) {
    let house = this.roomNoHouses[`${this.currBuilding}-${this.currUnit}-${room}`];
    house.address = `${this.address}${this.currBuilding}${this.currUnit}${room}`;
    this.navCtrl.push("HouseDetailPage", house);
  }

  changeUnit(unit) {

    this.currUnit = unit;
    // console.log(ev);
    // console.log(this.currUnit);
    // console.log(this.unitHouses);
    this.rooms = this.unitHouses[`${this.currBuilding}-${this.currUnit}`];
  }

}
