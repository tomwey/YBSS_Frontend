import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../provider/Store';
import { Tools } from '../../provider/Tools';

/**
 * Generated class for the NewEmployerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-employer',
  templateUrl: 'new-employer.html',
})
export class NewEmployerPage {
  address: any = null;
  constructor(public navCtrl: NavController,
    private store: Store,
    private tools: Tools,
    public navParams: NavParams) {
    this.address = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEmployerPage');
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
    this.store.addPeople(this.address.ID, "2", obj, () => {
      this.tools.showToast("录入成功");
      this.navCtrl.pop();
    });
  }

  selectOptionsData: any = {
    card_type: [
      {
        label: '居民身份证',
        value: '1'
      },
      {
        label: '护照',
        value: '2'
      },
      {
        label: '军官证',
        value: '3'
      },
    ],
    sex: [
      {
        label: '男',
        value: '1'
      },
      {
        label: '女',
        value: '2'
      },
    ],
    mz_type: [
      {
        label: '汉族',
        value: '1'
      },
      {
        label: '藏族',
        value: '2'
      },
      {
        label: '维族',
        value: '3'
      },
    ],

    country: [
      {
        label: '中国',
        value: '1'
      },
      {
        label: '美国',
        value: '2'
      },
      {
        label: '日本',
        value: '3'
      },
    ],
    jg_type: [
      {
        label: '籍贯1',
        value: '1'
      },
      {
        label: '籍贯2',
        value: '2'
      },
      {
        label: '籍贯3',
        value: '3'
      },
    ],
    job_type: [
      {
        label: '类别1',
        value: '1'
      },
      {
        label: '类别2',
        value: '2'
      }
    ],
    phone_type: [
      {
        label: '类别1',
        value: '1'
      },
      {
        label: '类别2',
        value: '2'
      }
    ],
    contact_type: [
      {
        label: '类别1',
        value: '1'
      },
      {
        label: '类别2',
        value: '2'
      }
    ],
    cj_reason: [
      {
        label: '类别1',
        value: '1'
      },
      {
        label: '类别2',
        value: '2'
      }
    ],
    cj_man_type: [
      {
        label: '类别1',
        value: '1'
      },
      {
        label: '类别2',
        value: '2'
      }
    ],
  };

  controls: any = [
    {
      ID: 'card_type',
      type: 4,
      name: '证件类型',
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
      ID: 'name',
      type: 2,
      name: '姓名',
      value: '',
      required: true,
      placeholder: '此项复用后，不可编辑'
    },
    {
      ID: 'sex',
      type: 4,
      name: '性别',
      value: '',
      required: true,
      placeholder: '此项复用后，不可编辑'
    },
    {
      ID: 'birth',
      type: 7,
      name: '出生日期',
      value: '',
      required: true,
      placeholder: '此项复用后，不可编辑'
    },
    {
      ID: 'mz_type',
      type: 4,
      name: '民族',
      value: '',
      required: true,
      placeholder: '此项复用后，不可编辑'
    },
    {
      ID: 'country',
      type: 4,
      name: '国籍',
      value: '',
      required: true
    },
    {
      ID: 'jg_type',
      type: 4,
      name: '籍贯',
      value: '',
      placeholder: '此项复用后，不可编辑'
      // required: true
    },
    {
      ID: 'job_type',
      type: 4,
      name: '职务类别',
      value: '',
      required: true
    },
    {
      ID: 'dept',
      type: 2,
      name: '所在部门',
      value: '',
      // required: true
    },
    {
      ID: 'job',
      type: 2,
      name: '所在岗位',
      value: '',
      // required: true
    },
    {
      ID: 'phone',
      type: 8,
      name: '联系电话',
      value: '',
    },
    {
      ID: 'phone_type',
      type: 4,
      name: '通讯类型',
      value: '',
    },
    {
      ID: 'contact_type',
      type: 4,
      name: '联系方式类别',
      value: '',
    },
    {
      ID: 'start_date',
      type: 7,
      name: '开始日期',
      value: '',
    },
    {
      ID: 'end_date',
      type: 7,
      name: '结束日期',
      value: '',
    },
    {
      ID: 'cj_reason',
      type: 4,
      name: '采集依据',
      value: '',
      required: true
    },
    {
      ID: 'cj_man_type',
      type: 4,
      name: '采集人类别',
      value: '',
      required: true
    },
    {
      ID: 'address',
      type: 2,
      name: '居住地址',
      value: '',
      // required: true,
      // can_scan: true
    },
    {
      ID: 'memo',
      type: 3,
      name: '备注信息',
      value: ''
    }
  ];

}
