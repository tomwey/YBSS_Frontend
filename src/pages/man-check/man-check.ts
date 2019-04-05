import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { YBSS } from '../../provider/YBSS';
import { Tools } from '../../provider/Tools';
import { Users } from '../../provider/Users';

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-man-check',
  templateUrl: 'man-check.html',
})
export class ManCheckPage {

  // title: any = '注销';
  // deleteData: any = {};
  house: any;
  person_id: any;
  constructor(public navCtrl: NavController,
    private ybss: YBSS,
    private tools: Tools,
    private users: Users,
    private events: Events,
    public navParams: NavParams) {
    // this.selectOptionsData['reason'] = this.navParams.data.reasons;
    this.house = this.navParams.data.house;
    this.person_id = this.navParams.data.person_id;
    // this.fillSelectOptions();
    this.selectOptionsData['man_status'] = [{ label: '仍在本地居住', value: '仍在本地居住' }, { label: '未在本地居住', value: '未在本地居住' }];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DeletePage');
  }

  commit() {
    let obj = {};
    if (!this.controls[0].value) {
      this.tools.showToast('核查情况不能为空');
      return;
    }

    // obj['obj_id'] = null;
    obj['person_id'] = this.person_id;
    obj['check_status'] = this.controls[0].value;
    obj['memo'] = this.controls[1].value;

    this.ybss.SaveObj(this.house.id, null, "person_check", obj, null, (res) => {
      // for (const key in res) {
      //   if (res.hasOwnProperty(key)) {
      //     const element = res[key];
      //     this.house[key] = element;
      //   }
      // }
      this.navCtrl.pop();
    });

  }

  controlSelect(control) {
    // console.log(control);
    const data = this.selectOptionsData[control.ID];
    this.navCtrl.push('CommonSelectPage', { data: data, control: control });
  }

  selectOptionsData: any = {
    reason: [
    ],
  }

  controls: any = [
    {
      ID: 'man_status',
      type: 4,
      name: '核查情况',
      value: '',
      required: true
    },
    {
      ID: 'memo',
      type: 3,
      name: '备注信息',
      value: '',
      required: false
    },
  ];

}
