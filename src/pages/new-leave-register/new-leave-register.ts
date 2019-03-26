import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Tools } from '../../provider/Tools';
import { Store } from '../../provider/Store';

/**
 * Generated class for the NewLeaveRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-leave-register',
  templateUrl: 'new-leave-register.html',
})
export class NewLeaveRegisterPage {

  controls: any = [
    {
      ID: 'name',
      type: 2,
      name: '姓名',
      value: '',
      required: true
    },
    {
      ID: 'card_no',
      type: 2,
      name: '证件号码',
      value: '',
      required: true
    },
    {
      ID: 'phone',
      type: 2,
      name: '联系电话',
      value: '',
      required: true
    },
    {
      ID: 'date',
      type: 7,
      name: '离开日期',
      value: '',
      required: true
    },
    {
      ID: 'hj_address',
      type: 2,
      name: '户籍地址',
      value: '',
      required: false
    },
    {
      ID: 'creator_name',
      type: 2,
      name: '申报人姓名',
      value: '',
      required: true
    },
    {
      ID: 'creator_card_no',
      type: 2,
      name: '申报人证件号码',
      value: '',
      required: true
    },
    {
      ID: 'creator_phone',
      type: 2,
      name: '申报人电话',
      value: '',
      required: true
    },
  ];
  constructor(public navCtrl: NavController,
    private tools: Tools,
    private store: Store,
    private events: Events,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewLeaveRegisterPage');
  }

  controlSelect(ev) {

  }

  reset() {
    this.controls.forEach(element => {
      element.value = '';
    });
  }
  save() {
    let obj = {};
    for (let i = 0; i < this.controls.length; i++) {
      let control = this.controls[i];

      if (control.required && !control.value) {
        this.tools.showToast(`${control.name}不能为空`);
        return;
      }
      obj[control.ID] = control.value || "";
    }

    this.store.addItem(obj, 'leave_reg', () => {
      this.events.publish('reloadlogs');
      this.navCtrl.pop();
    });
  }

}
