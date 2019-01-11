import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Store } from '../../provider/Store';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

/**
 * Generated class for the NewPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-people',
  templateUrl: 'new-people.html',
})
export class NewPeoplePage {
  // address: any = null;
  house: any;
  pid: any;
  constructor(public navCtrl: NavController,
    // private store: Store,
    private tools: Tools,
    private ybss: YBSS,
    public navParams: NavParams) {
    // this.address = this.navParams.data;
    this.house = this.navParams.data.house;
    this.pid = this.navParams.data.id;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewPeoplePage');

    // this.store.getItems("peoples", (arr) => {
    //   console.log(arr);
    // });
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
    // this.store.addItem(obj, "peoples", () => {
    //   this.tools.showToast("录入成功");
    //   this.navCtrl.pop();
    // });
    // this.store.addPeople(this.address.ID, "1", obj, () => {
    //   this.tools.showToast("录入成功");
    //   this.navCtrl.pop();
    // });
    this.ybss.SaveObj(this.house.id, this.pid, "person", obj, null, (res) => {
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
    country: [
      {
        label: '中国大陆',
        value: '中国大陆',
      },
      {
        label: '中国香港',
        value: '中国香港',
      },
      {
        label: '中国澳门',
        value: '中国澳门',
      },
      {
        label: '台湾地区',
        value: '台湾地区',
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
    mgr_level: [
      {
        label: '常规管理 (A)',
        value: '常规管理 (A)',
      },
      {
        label: '常规管理 (B)',
        value: '常规管理 (B)',
      },
      {
        label: '常规管理 (C)',
        value: '常规管理 (C)',
      },
    ],
    caiji_type: [
      {
        label: '采集类别1',
        value: '采集类别1',
      },
      {
        label: '采集类别2',
        value: '采集类别2',
      },
      {
        label: '采集类别3',
        value: '采集类别3',
      },
    ],
    caiji_reason: [
      {
        label: '采集依据1',
        value: '采集依据1',
      },
      {
        label: '采集依据2',
        value: '采集依据2',
      },
    ],
    situation: [
      {
        label: '情况1',
        value: '1',
      },
      {
        label: '情况2',
        value: '2',
      },
    ],
    native_place: [
      {
        label: '籍贯1',
        value: '籍贯1',
      },
      {
        label: '籍贯2',
        value: '籍贯2',
      },
    ],
    identity: [
      {
        label: '党员',
        value: '党员',
      },
      {
        label: '团员',
        value: '团员',
      },
      {
        label: '群众',
        value: '群众',
      }
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
    marry_status: [
      {
        label: '已婚',
        value: '已婚',
      },
      {
        label: '未婚',
        value: '未婚',
      },
      {
        label: '离婚',
        value: '离婚',
      },
    ],
    gov_type: [
      {
        label: '党员',
        value: '党员',
      },
      {
        label: '党员',
        value: '党员',
      },
    ],
    religion: [
      {
        label: '佛教',
        value: '佛教',
      },
      {
        label: '基督教',
        value: '基督教',
      },
    ],
    blood_type: [
      {
        label: 'A型',
        value: 'A型',
      },
      {
        label: 'B型',
        value: 'B型',
      },
      {
        label: 'O型',
        value: 'O型',
      },
      {
        label: 'AB型',
        value: 'AB型',
      },
    ],
    mili_serve_state: [
      {
        label: '服兵役',
        value: '服兵役',
      },
      {
        label: '未服兵役',
        value: '未服兵役',
      },
    ],
    education: [
      {
        label: '中专',
        value: '中专',
      },
      {
        label: '大专',
        value: '大专',
      },
      {
        label: '本科',
        value: '本科',
      },
      {
        label: '硕士',
        value: '硕士',
      },
      {
        label: '博士',
        value: '博士',
      },
    ],
    speciality: [
      {
        label: '钢琴二级',
        value: '钢琴二级',
      },
      {
        label: '跳高运动员',
        value: '跳高运动员',
      },
    ],
    job: [
      {
        label: '计算机',
        value: '计算机',
      },
      {
        label: '司机',
        value: '司机',
      },
      {
        label: '教师',
        value: '教师',
      },
    ],
    strong_point: [
      {
        label: '无特长',
        value: '无特长',
      },
      {
        label: '特长1',
        value: '特长1',
      },
    ]
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
      ID: 'birth',
      type: 7,
      name: '出生日期',
      value: '',
      required: true
    },
    {
      ID: 'country',
      type: 4,
      name: '国家地区',
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
      ID: 'reg_address',
      type: 2,
      name: '户籍地址',
      value: '',
      // required: true
    },
    {
      ID: 'address1',
      type: 2,
      name: '居住地址1',
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
      ID: 'caiji_type',
      type: 4,
      name: '采集人类别',
      value: '',
      required: true
    },
    {
      ID: 'caiji_reason',
      type: 4,
      name: '采集依据',
      value: '',
      required: true
    },
    {
      ID: 'situation',
      type: 4,
      name: '人员情况',
      value: '',
    },
    {
      ID: 'birth_addr',
      type: 2,
      name: '出生地',
      value: '',
    },
    {
      ID: 'native_place',
      type: 4,
      name: '籍贯',
      value: '',
    },
    {
      ID: 'identity',
      type: 4,
      name: '身份',
      value: '',
    },
    {
      ID: 'old_name',
      type: 2,
      name: '曾用名',
      value: '',
    },
    {
      ID: 'nation',
      type: 4,
      name: '民族',
      value: '',
    },
    {
      ID: 'alias_name',
      type: 2,
      name: '别名绰号',
      value: '',
    },
    {
      ID: 'telephone',
      type: 8,
      name: '联系电话',
      value: '',
    },
    {
      ID: 'marry_status',
      type: 4,
      name: '婚姻状况',
      value: '',
    },
    {
      ID: 'gov_type',
      type: 4,
      name: '政治面貌',
      value: '',
      // required: true
    },
    {
      ID: 'religion',
      type: 4,
      name: '宗教信仰',
      value: '',
      // required: true
    },
    {
      ID: 'height',
      type: 2,
      name: '身高(cm)',
      value: '',
      // required: true
    },
    {
      ID: 'blood_type',
      type: 4,
      name: '血型',
      value: '',
      // required: true
    },
    {
      ID: 'mili_serve_state',
      type: 4,
      name: '兵役情况',
      value: '',
      // required: true
    },
    {
      ID: 'education',
      type: 4,
      name: '文化程度',
      value: '',
      // required: true
    },
    {
      ID: 'speciality',
      type: 4,
      name: '专长',
      value: '',
      // required: true
    },
    {
      ID: 'job',
      type: 4,
      name: '职业',
      value: '',
      // required: true
    },
    {
      ID: 'strong_point',
      type: 4,
      name: '人员特长',
      value: '',
      // required: true
    },
  ];

}
