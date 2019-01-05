import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../provider/Store';
import { Tools } from '../../provider/Tools';

/**
 * Generated class for the NewDailyCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-daily-check',
  templateUrl: 'new-daily-check.html',
})
export class NewDailyCheckPage {

  selectOptionsData: any = {};
  controls: any = [];
  address: any = null;
  constructor(public navCtrl: NavController,
    private store: Store,
    private tools: Tools,
    public navParams: NavParams) {
    this.address = this.navParams.data.address;

    if (this.navParams.data && this.navParams.data.type == '1') {
      // 房屋日常检查
      this.controls = [
        {
          ID: 'address',
          type: 2,
          name: '房屋详址',
          value: '',
          // required: true
        },
        {
          ID: 'has_people',
          type: 4,
          name: '是否有居住人员',
          value: '',
          required: true
        },
        {
          ID: 'has_exception',
          type: 4,
          name: '有无异常情况',
          value: '',
          // required: true
        },
        {
          ID: 'check_date',
          type: 7,
          name: '检查日期',
          value: '',
          required: true
        },
        {
          ID: 'memo',
          type: 3,
          name: '备注信息',
          value: '',
          required: true
        },
      ];

      this.selectOptionsData = {
        has_people: [
          {
            label: '无',
            value: '0'
          },
          {
            label: '有',
            value: '1'
          },
        ],
        has_exception: [
          {
            label: '无',
            value: '0'
          },
          {
            label: '有',
            value: '1'
          },
        ]
      };
    } else {
      // 单位日常检查
      this.controls = [
        {
          ID: 'name',
          type: 2,
          name: '单位名称',
          value: '',
          required: true
        },
        {
          ID: 'has_exception',
          type: 4,
          name: '有无异常情况',
          value: '',
          // required: true
        },
        {
          ID: 'check_date',
          type: 7,
          name: '检查日期',
          value: '',
          required: true
        },
        {
          ID: 'memo',
          type: 3,
          name: '备注信息',
          value: '',
          required: true
        },
      ];

      this.selectOptionsData = {
        has_exception: [
          {
            label: '无',
            value: '0'
          },
          {
            label: '有',
            value: '1'
          },
        ]
      };
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewDailyCheckPage');
  }

  controlSelect(control) {
    // console.log(control);
    const data = this.selectOptionsData[control.ID];
    this.navCtrl.push('CommonSelectPage', { data: data, control: control });
  }

  reset() {
    this.controls.forEach(element => {
      element.value = '';
    });
  }

  save() {
    // console.log(this.controls);
    let obj = {};
    this.controls.forEach(control => {
      obj[control.ID] = control.value || "";
    });
    this.store.addCheck(this.address.ID, obj, () => {
      this.tools.showToast("录入成功");
      this.navCtrl.pop();
    });
  }

}
