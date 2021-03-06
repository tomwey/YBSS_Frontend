import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';
import { iOSFixedScrollFreeze } from '../../provider/iOSFixedScrollFreeze';

/**
 * Generated class for the SelectTimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-times',
  templateUrl: 'select-times.html',
})
export class SelectTimesPage {

  times: any = [];
  selectedItems: any = [];

  originData: any = [];
  keyword: any = '';

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, 
    private events: Events,
    private iosFixed: iOSFixedScrollFreeze,
    public navParams: NavParams) {
    let arr = this.navParams.data.times || [];
    this.selectedItems = this.navParams.data.selectedItems || [];

    let temp = [];
    // let sum = 0;
    arr.forEach(element => {
      const isChecked = this.selectedItems.indexOf(element) != -1;
      temp.push(
        {
          label: element,
          checked: isChecked
        }
      );
    });

    this.times = temp;

    this.originData = this.times;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SelectTimesPage');
    this.iosFixed.fixedScrollFreeze(this.content);
  }

  startSearch(kw) {
    if (kw.trim() == '') {
      this.times = this.originData;
      return;
    }

    this.times = this.originData.filter(item => {
      return item.label.indexOf(kw.trim().toLowerCase()) > -1;
    });
  }

  done() {
    this.events.publish('times:select', this.selectedItems);
    this.navCtrl.pop();
  }

  cbChange(item,ev) {
    // console.log(11111);
    const index = this.selectedItems.indexOf(item.label);
    if (index == -1) {
      this.selectedItems.push(item.label);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }

}
