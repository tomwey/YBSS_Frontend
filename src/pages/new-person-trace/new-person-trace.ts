import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

/**
 * Generated class for the NewCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-person-trace',
  templateUrl: 'new-person-trace.html',
})
export class NewPersonTracePage {

  house: any;
  person_id: any;
  constructor(public navCtrl: NavController,
    private tools: Tools,
    private ybss: YBSS,
    public navParams: NavParams) {
    this.house = this.navParams.data.house;
    this.person_id = this.navParams.data.person_id;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewCompanyPage');
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
    // this.controls.forEach(control => {
    //   if (control.required && !control.value) {
    //     this.tools.showToast(`${control.name}不能为空`);
    //     return;
    //   }
    //   obj[control.ID] = control.value || "";
    // });
    for (let i = 0; i < this.controls.length; i++) {
      let control = this.controls[i];

      if (control.required && !control.value) {
        this.tools.showToast(`${control.name}不能为空`);
        return;
      }
      obj[control.ID] = control.value || "";
    }

    obj['person_id'] = this.person_id;

    this.ybss.SaveObj(this.house.id, null, "person_addr_trace", obj, null, (res) => {
      // for (const key in res) {
      //   if (res.hasOwnProperty(key)) {
      //     const element = res[key];
      //     this.house[key] = element;
      //   }
      // }
      this.navCtrl.pop();
    });
  }

  selectOptionsData: any = {
    cj_type: [
      {
        label: '采集类别一',
        value: '采集类别一'
      },
      {
        label: '采集类别2',
        value: '采集类别2'
      },
    ],
    cj_reason: [
      {
        label: '采集理由一',
        value: '采集理由一'
      },
      {
        label: '采集理由2',
        value: '采集理由2'
      },
    ],
    mgr_level: [
      {
        label: '常规管理 (A)',
        value: '常规管理 (A)'
      },
      {
        label: '常规管理 (B)',
        value: '常规管理 (B)'
      },
      {
        label: '常规管理 (C)',
        value: '常规管理 (C)'
      },
    ],
  };

  controls: any = [
    {
      ID: 'address',
      type: 2,
      name: '居住地址',
      value: '',
      required: true
    },
    {
      ID: 'mgr_level',
      type: 4,
      name: '管理等级',
      value: '',
      required: true
    },
    {
      ID: 'cj_type',
      type: 4,
      name: '采集类别',
      value: '',
      required: true
    },
    {
      ID: 'cj_reason',
      type: 4,
      name: '采集依据',
      value: '',
      required: true
    },
    {
      ID: 'man_status',
      type: 2,
      name: '人员情况',
      value: '',
      // required: true
    },
    {
      ID: 'memo',
      type: 3,
      name: '备注信息',
      value: '',
    },
  ];

}
