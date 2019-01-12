import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../provider/Store';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

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
  // address: any = null;
  company: any;
  constructor(public navCtrl: NavController,
    private store: Store,
    private tools: Tools,
    private ybss: YBSS,
    public navParams: NavParams) {
    // this.address = this.navParams.data;
    this.company = this.navParams.data.company;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewEmployerPage');
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
    let obj = {};
    this.controls.forEach(control => {
      if (control.required && !control.value) {
        this.tools.showToast(`${control.name}不能为空`);
        return;
      }
      obj[control.ID] = control.value || "";
    });

    this.ybss.SaveEmp(this.company.id, null, obj, (res) => {
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const element = res[key];
          this.company[key] = element;
        }
      }
      this.navCtrl.pop();
    });
  }

  selectOptionsData: any = {
    card_type: [
      {
        label: '居民身份证',
        value: '居民身份证'
      },
      {
        label: '护照',
        value: '护照'
      },
      {
        label: '军官证',
        value: '军官证'
      },
    ],
    job_type: [
      {
        label: '法定代表人',
        value: '法定代表人',
      },
      {
        label: '负责人',
        value: '负责人',
      },
      {
        label: '保卫人员',
        value: '保卫人员',
      },
      {
        label: '保卫负责人',
        value: '保卫负责人',
      },
      {
        label: '一般从业人员',
        value: '一般从业人员',
      },
    ],
    sex: [
      {
        label: '男',
        value: '男'
      },
      {
        label: '女',
        value: '女'
      },
    ],
    nation: [
      {
        label: '汉族',
        value: '汉族'
      },
      {
        label: '藏族',
        value: '藏族'
      },
      {
        label: '维族',
        value: '维族'
      },
    ],

    country: [
      {
        label: '中国',
        value: '中国'
      },
      {
        label: '中国香港',
        value: '中国香港'
      },
      {
        label: '中国澳门',
        value: '中国澳门'
      },
    ],
    native_place: [
      {
        label: '籍贯1',
        value: '籍贯1'
      },
      {
        label: '籍贯2',
        value: '籍贯2'
      },
      {
        label: '籍贯3',
        value: '籍贯3'
      },
    ],
    communicate_type: [
      {
        label: '类别1',
        value: '类别1'
      },
      {
        label: '类别2',
        value: '类别2'
      }
    ],
    contact_type: [
      {
        label: '类别1',
        value: '类别1'
      },
      {
        label: '类别2',
        value: '类别2'
      }
    ],
    caiji_reason: [
      {
        label: '情况1',
        value: '情况1'
      },
      {
        label: '情况2',
        value: '情况2'
      }
    ],
    caiji_type: [
      {
        label: '类别1',
        value: '类别1'
      },
      {
        label: '类别2',
        value: '类别2'
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
      ID: 'nation',
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
      ID: 'native_place',
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
      ID: 'position',
      type: 2,
      name: '所在岗位',
      value: '',
      // required: true
    },
    {
      ID: 'telephone',
      type: 8,
      name: '联系电话',
      value: '',
    },
    {
      ID: 'communicate_type',
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
      ID: 'begin_date',
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
      ID: 'caiji_reason',
      type: 4,
      name: '采集依据',
      value: '',
      required: true
    },
    {
      ID: 'caiji_type',
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
