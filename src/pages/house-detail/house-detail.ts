import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.address = this.navParams.data;
    this.room = this.address.room || this.address;
    // console.log(this.address);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddressDetailPage');
  }

  addDailyCheck() {
    // let modal = this.modalCtrl.create("NewDailyCheckPage")
    this.navCtrl.push("NewDailyCheckPage");
  }

  addPeople() {
    this.navCtrl.push("NewPeoplePage");
  }

  editHouse() {
    this.navCtrl.push("HouseEditPage");
  }



  goHome() {
    this.navCtrl.popToRoot();
  }

}
