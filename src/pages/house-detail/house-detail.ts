import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../provider/Store';
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

  address: any = null;
  room: any = null;

  checks: any = [];
  logs: any = [];
  people1: any = [];
  people2: any = [];

  constructor(public navCtrl: NavController,
    private store: Store,
    public navParams: NavParams) {
    this.address = this.navParams.data;
    this.room = this.address.room || this.address;
    console.log(this.room);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressDetailPage');
  }

  ionViewWillEnter() {
    this.store.getChecks(this.address.ID, (arr) => {
      this.checks = arr;
    });
    this.store.getLogs(this.address.ID, (arr) => {
      this.logs = arr;
    });

    this.store.getPeople(this.address.ID, "1", (arr) => {
      this.people1 = arr;
    });

    this.store.getPeople(this.address.ID, "2", (arr) => {
      this.people2 = arr;
    });
  }

  addDailyCheck() {
    // let modal = this.modalCtrl.create("NewDailyCheckPage")
    this.navCtrl.push("NewDailyCheckPage", { address: this.address, type: this.room.usetypeid == 1 ? 1 : 2 });
  }

  formatDate(time) {
    return Utils.dateFormat(new Date(time), "yyyy-MM-dd HH:mm:ss");
  }

  addPeople() {
    this.navCtrl.push("NewPeoplePage", this.address);
  }

  addPeople2() {
    this.navCtrl.push("NewEmployerPage", this.address);
  }

  editHouse() {
    this.navCtrl.push("HouseEditPage");
  }



  goHome() {
    this.navCtrl.popToRoot();
  }

}
