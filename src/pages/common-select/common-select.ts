import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the CommonSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-common-select',
  templateUrl: 'common-select.html',
})
export class CommonSelectPage {

  dataList: any = [];
  control: any  = null;
  error: any = null;

  constructor(public navCtrl: NavController, 
    private events: Events,
    public navParams: NavParams) {
    this.dataList = this.navParams.data.data;
    this.control = this.navParams.data.control;
    this.error  =this.dataList.length === 0 ? '暂无数据' : null;
    
    console.log(this.dataList);
    console.log(this.control);

    this.resetSelect();
  }

  resetSelect() {
    this.dataList.forEach(element => {
      element.selected = false;
      
      if (element.value === this.control.value || 
        element.label === this.control.value
        ) {
        element.selected = true;
      }
    });
  }

  select(item) {
    if (item.selected) return;

    this.control.value = item.label;

    this.events.publish('item:selected', this.control);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonSelectPage');
  }

}
