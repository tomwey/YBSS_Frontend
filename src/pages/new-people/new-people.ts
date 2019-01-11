import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Store } from '../../provider/Store';
import { Tools } from '../../provider/Tools';

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
  address: any = null;
  constructor(public navCtrl: NavController,
    // private store: Store,
    private tools: Tools,
    public navParams: NavParams) {
    this.address = this.navParams.data;
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
    manage_level: [
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
    cj_people_type: [
      {
        label: '类别1',
        value: '1',
      },
      {
        label: '类别2',
        value: '2',
      },
      {
        label: '类别3',
        value: '3',
      },
    ],
    cj_reason: [
      {
        label: '情况1',
        value: '1',
      },
      {
        label: '情况2',
        value: '2',
      },
    ],
    people_condition: [
      {
        label: '情况1',
        value: '1',
      },
      {
        label: '情况2',
        value: '2',
      },
    ],
    jg_type: [
      {
        label: '籍贯1',
        value: '1',
      },
      {
        label: '籍贯2',
        value: '2',
      },
    ],
    sf_type: [
      {
        label: '党员',
        value: '1',
      },
      {
        label: '团员',
        value: '2',
      },
      {
        label: '群众',
        value: '3',
      }
    ],
    mz_type: [
      {
        label: '汉族',
        value: '1',
      },
      {
        label: '藏族',
        value: '2',
      },
      {
        label: '维族',
        value: '3',
      },
    ],
    marry_type: [
      {
        label: '已婚',
        value: '1',
      },
      {
        label: '未婚',
        value: '2',
      },
      {
        label: '离婚',
        value: '3',
      },
    ],
    zzmm_type: [
      {
        label: '党员',
        value: '1',
      },
      {
        label: '团员',
        value: '2',
      },
    ],
    zj_type: [
      {
        label: '佛教',
        value: '1',
      },
      {
        label: '基督教',
        value: '2',
      },
    ],
    blood_type: [
      {
        label: 'A型',
        value: 'a',
      },
      {
        label: 'B型',
        value: 'b',
      },
      {
        label: 'O型',
        value: 'o',
      },
      {
        label: 'AB型',
        value: 'ab',
      },
    ],
    by_state: [
      {
        label: '服兵役',
        value: '1',
      },
      {
        label: '未服兵役',
        value: '2',
      },
    ],
    study_type: [
      {
        label: '中专',
        value: '1',
      },
      {
        label: '大专',
        value: '2',
      },
      {
        label: '本科',
        value: '3',
      },
      {
        label: '硕士',
        value: '4',
      },
      {
        label: '博士',
        value: '5',
      },
    ],
    specialty_type: [
      {
        label: '钢琴二级',
        value: '1',
      },
      {
        label: '跳高运动员',
        value: '2',
      },
    ],
    job_type: [
      {
        label: '计算机',
        value: '1',
      },
      {
        label: '司机',
        value: '2',
      },
      {
        label: '教师',
        value: '3',
      },
    ],
    rytc_type: [
      {
        label: '无特长',
        value: '1',
      },
      {
        label: '特长1',
        value: '2',
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
      ID: 'hj_address',
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
      ID: 'manage_level',
      type: 4,
      name: '管理等级',
      value: '',
      required: true
    },
    {
      ID: 'cj_people_type',
      type: 4,
      name: '采集人类别',
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
      ID: 'people_condition',
      type: 4,
      name: '人员情况',
      value: '',
    },
    {
      ID: 'birth_address',
      type: 2,
      name: '出生地',
      value: '',
    },
    {
      ID: 'jg_type',
      type: 4,
      name: '籍贯',
      value: '',
    },
    {
      ID: 'sf_type',
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
      ID: 'mz_type',
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
      ID: 'phone',
      type: 8,
      name: '联系电话',
      value: '',
    },
    {
      ID: 'marry_type',
      type: 4,
      name: '婚姻状况',
      value: '',
    },
    {
      ID: 'zzmm_type',
      type: 4,
      name: '政治面貌',
      value: '',
      // required: true
    },
    {
      ID: 'zj_type',
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
      ID: 'by_state',
      type: 4,
      name: '兵役情况',
      value: '',
      // required: true
    },
    {
      ID: 'study_type',
      type: 4,
      name: '文化程度',
      value: '',
      // required: true
    },
    {
      ID: 'specialty_type',
      type: 4,
      name: '专长',
      value: '',
      // required: true
    },
    {
      ID: 'job_type',
      type: 4,
      name: '职业',
      value: '',
      // required: true
    },
    {
      ID: 'rytc_type',
      type: 4,
      name: '人员特长',
      value: '',
      // required: true
    },
  ];

}
