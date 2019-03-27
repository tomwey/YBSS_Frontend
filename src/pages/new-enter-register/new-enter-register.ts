import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Tools } from '../../provider/Tools';
import { Store } from '../../provider/Store';

/**
 * Generated class for the NewEnterRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-enter-register',
  templateUrl: 'new-enter-register.html',
})
export class NewEnterRegisterPage {

  selectOptionsData: any = {
    is_foreign_man: [
      {
        label: '是',
        value: '是'
      },
      {
        label: '否',
        value: '否'
      },
    ],
    card_type: [
      {
        label: '无证件人员',
        value: null
      },
      {
        label: '居民身份证',
        value: '居民身份证'
      },
      {
        label: '护照',
        value: '护照'
      },
      {
        label: '驾照',
        value: '驾照'
      },
    ],
    _type: [
      {
        label: '自用房',
        value: '自用房'
      },
      {
        label: '租用房',
        value: '租用房'
      }
    ],
    sex: [
      {
        label: '男',
        value: '男'
      },
      {
        label: '女',
        value: '女'
      }
    ]
  };

  firstControls: any = [
    {
      ID: '_type',
      type: 4,
      name: '居住类型',
      value: '',
      required: true
    },
    {
      ID: 'name',
      type: 2,
      name: '姓名',
      value: '',
      required: true
    },
    {
      ID: 'sex',
      type: 4,
      name: '性别',
      value: '',
      required: true
    },
    {
      ID: 'card_type',
      type: 4,
      name: '证件类型',
      value: '',
      required: true
    },
    {
      ID: 'is_foreign_man',
      type: 4,
      name: '是否境外人员',
      value: '',
      required: true
    },
  ];

  is_foreign_man_controls: any = [
    {
      ID: 'country',
      type: 2,
      name: '国家',
      value: '',
      required: true
    },
  ];

  no_foreign_man_controls: any = [
    {
      ID: 'nation',
      type: 2,
      name: '民族',
      value: '',
      required: false
    },
    {
      ID: 'hj_address',
      type: 2,
      name: '户籍地址',
      value: '',
      required: false
    },
  ];

  has_card_controls: any = [
    {
      ID: 'card_no',
      type: 2,
      name: '证件号码',
      value: '',
      required: true
    },
  ];

  no_card_controls: any = [
    {
      ID: 'birth',
      type: 7,
      name: '出生日期',
      value: '',
      required: true
    },
    {
      ID: 'man1',
      type: 2,
      name: '监护人1',
      value: '',
      required: true
    },
    {
      ID: 'man2',
      type: 2,
      name: '监护人2',
      value: '',
      required: false
    },
  ];

  lastControls: any = [
    {
      ID: 'company',
      type: 2,
      name: '工作单位',
      value: '',
      required: false
    },
    {
      ID: 'begin_date',
      type: 7,
      name: '入住开始日期',
      value: '',
      required: true
    },
    {
      ID: 'end_date',
      type: 7,
      name: '入住结束日期',
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

  controls: any = [
    // {
    //   ID: '_type',
    //   type: 4,
    //   name: '居住类型',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'name',
    //   type: 2,
    //   name: '姓名',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'sex',
    //   type: 4,
    //   name: '性别',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'birth',
    //   type: 7,
    //   name: '出生日期',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'card_type',
    //   type: 4,
    //   name: '证件类型',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'card_no',
    //   type: 2,
    //   name: '证件号码',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'is_foreign_man',
    //   type: 4,
    //   name: '是否境外人员',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'phone',
    //   type: 2,
    //   name: '联系电话1',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'phone2',
    //   type: 2,
    //   name: '联系电话2',
    //   value: '',
    //   required: false
    // },
    // {
    //   ID: 'phone3',
    //   type: 2,
    //   name: '联系电话3',
    //   value: '',
    //   required: false
    // },
    // {
    //   ID: 'man1',
    //   type: 2,
    //   name: '监护人1',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'man2',
    //   type: 2,
    //   name: '监护人2',
    //   value: '',
    //   required: false
    // },
    // {
    //   ID: 'country',
    //   type: 2,
    //   name: '国家',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'nation',
    //   type: 2,
    //   name: '民族',
    //   value: '',
    //   required: false
    // },
    // {
    //   ID: 'hj_address',
    //   type: 2,
    //   name: '户籍地址',
    //   value: '',
    //   required: false
    // },
    // {
    //   ID: 'company',
    //   type: 2,
    //   name: '工作单位',
    //   value: '',
    //   required: false
    // },
    // {
    //   ID: 'begin_date',
    //   type: 7,
    //   name: '入住开始日期',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'end_date',
    //   type: 7,
    //   name: '入住结束日期',
    //   value: '',
    //   required: false
    // },
    // {
    //   ID: 'creator_name',
    //   type: 2,
    //   name: '申报人姓名',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'creator_card_no',
    //   type: 2,
    //   name: '申报人证件号码',
    //   value: '',
    //   required: true
    // },
    // {
    //   ID: 'creator_phone',
    //   type: 2,
    //   name: '申报人电话',
    //   value: '',
    //   required: true
    // },
  ];

  currentCardControls: any = [];
  currentForeignControls: any = [];

  constructor(public navCtrl: NavController,
    private tools: Tools,
    private store: Store,
    private events: Events,
    public navParams: NavParams) {
    this.events.subscribe("item:selected", (control) => {
      this.prepareOtherControls(control);
    });

    this.controls = this.firstControls.concat(this.lastControls);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewEnterRegisterPage');
  }

  prepareOtherControls(control) {
    // card_
    if (control.ID === 'card_type') {
      // console.log(control.value);
      if (control.value == '无证件人员') {
        this.currentCardControls = this.no_card_controls;
      } else {
        this.currentCardControls = this.has_card_controls;
      }
    }

    if (control.ID === 'is_foreign_man') {
      // console.log(control.value);
      if (control.value == '否') {
        this.currentForeignControls = this.no_foreign_man_controls;
      } else {
        this.currentForeignControls = this.is_foreign_man_controls;
      }
    }

    // console.log(this.currentForeignControls);

    this.controls = this.firstControls.concat(this.currentCardControls).concat(this.is_foreign_man_controls).concat(this.lastControls);
  }

  controlSelect(control) {
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
    for (let i = 0; i < this.controls.length; i++) {
      let control = this.controls[i];

      if (control.required && !control.value) {
        this.tools.showToast(`${control.name}不能为空`);
        return;
      }
      obj[control.ID] = control.value || "";
    }

    this.store.addItem(obj, 'enter_reg', () => {
      this.events.publish('reloadlogs');
      this.navCtrl.pop();
    });
  }

}
