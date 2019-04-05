import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

/**
 * Generated class for the NewPropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-property',
  templateUrl: 'edit-property.html',
})
export class EditPropertyPage {

  house: any;
  item: any;
  constructor(public navCtrl: NavController,
    private tools: Tools,
    private ybss: YBSS,
    private events: Events,
    public navParams: NavParams) {
    this.house = this.navParams.data.house;
    this.item = this.navParams.data.item;

    this.events.subscribe("item:selected", (control) => {
      this.prepareOtherControls(control);
    });
  }

  ionViewDidLoad() {
    // this.controls[0].value = this.item['_type'];

    // this.prepareOtherControls(this.controls[0]);

    if (this.item['_type'] === '单位') {
      this.controls = this.compControls;
    } else {
      this.controls = this.manControls;
    }

    this.controls.forEach(control => {
      control.value = this.item[control.ID];
    });
  }

  prepareOtherControls(control) {
    if (control.ID === '_type' && control.value === "单位") {
      this.controls = this.compControls;
    } else {
      this.controls = this.manControls;
    }
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

    this.ybss.SaveObj(this.house.id, this.item.id, "property_info", obj, null, (res) => {
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const element = res[key];
          this.house[key] = element;
        }
      }
      this.navCtrl.pop();
    });
  }

  selectOptionsData: any = {
    _type: [
      {
        label: '单位',
        value: '单位'
      },
      {
        label: '个人',
        value: '个人'
      },
    ],
    card_type: [
      {
        label: '居民身份证',
        value: '居民身份证'
      },
      {
        label: '军官证',
        value: '军官证'
      },
      {
        label: '社保卡',
        value: '社保卡'
      },
      {
        label: '护照',
        value: '护照'
      },
      {
        label: '驾驶证',
        value: '驾驶证'
      },
    ],
    sex: [
      {
        label: '男',
        value: '男',
      },
      {
        label: '女',
        value: '女',
      },
    ],
    nation: [
      {
        label: '汉族',
        value: '汉族',
      },
      {
        label: '藏族',
        value: '藏族',
      },
      {
        label: '维族',
        value: '维族',
      },
    ],
  };

  manControls: any = [
    {
      ID: '_type',
      type: 4,
      name: '产权类型',
      value: '',
      required: true
    },
    {
      ID: 'license_no',
      type: 2,
      name: '产权证号',
      value: '',
      required: false
    },
    {
      ID: 'card_type',
      type: 4,
      name: '房主证件类型',
      value: '',
      required: false
    },
    {
      ID: 'card_no',
      type: 2,
      name: '房主证件号码',
      value: '',
      required: false
    },
    {
      ID: 'name',
      type: 2,
      name: '房主姓名',
      value: '',
      required: false
    },
    {
      ID: 'sex',
      type: 4,
      name: '性别',
      value: '',
      required: false
    },
    {
      ID: 'nation',
      type: 4,
      name: '民族',
      value: '',
      required: false
    },
    {
      ID: 'phone',
      type: 2,
      name: '联系电话',
      value: '',
      // required: true
    },
    {
      ID: 'address',
      type: 2,
      name: '现居住地址',
      value: '',
      // required: true
    },
    {
      ID: 'memo',
      type: 3,
      name: '备注',
      value: '',
      // required: true
    }
  ];

  compControls = [
    {
      ID: '_type',
      type: 4,
      name: '产权类型',
      value: '',
      required: true
    },
    {
      ID: 'license_no',
      type: 2,
      name: '产权证号',
      value: '',
      required: false
    },
    {
      ID: 'comp_name',
      type: 2,
      name: '单位名称',
      value: '',
      required: true
    }, {
      ID: 'comp_phone',
      type: 2,
      name: '单位联系电话',
      value: '',
      required: true
    }, {
      ID: 'comp_addr',
      type: 2,
      name: '单位地址',
      value: '',
      required: false
    }, {
      ID: 'comp_position',
      type: 2,
      name: '职务',
      value: '',
      required: false
    },
    {
      ID: 'card_type',
      type: 4,
      name: '房主证件类型',
      value: '',
      required: false
    },
    {
      ID: 'card_no',
      type: 2,
      name: '房主证件号码',
      value: '',
      required: false
    },
    {
      ID: 'name',
      type: 2,
      name: '房主姓名',
      value: '',
      required: false
    },
    {
      ID: 'sex',
      type: 4,
      name: '性别',
      value: '',
      required: false
    },
    {
      ID: 'nation',
      type: 4,
      name: '民族',
      value: '',
      required: false
    },
    {
      ID: 'phone',
      type: 2,
      name: '联系电话',
      value: '',
      // required: true
    },
    {
      ID: 'address',
      type: 2,
      name: '现居住地址',
      value: '',
      // required: true
    },
    {
      ID: 'memo',
      type: 3,
      name: '备注',
      value: '',
      // required: true
    }
  ];

  controls: any = [];

}
