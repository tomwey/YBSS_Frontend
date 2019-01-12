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
  selector: 'page-new-company',
  templateUrl: 'new-company.html',
})
export class NewCompanyPage {

  house: any;
  obj_id: any;
  constructor(public navCtrl: NavController,
    private tools: Tools,
    private ybss: YBSS,
    public navParams: NavParams) {
    this.house = this.navParams.data.house;
    this.obj_id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCompanyPage');
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
      if (control.required && !control.value) {
        this.tools.showToast(`${control.name}不能为空`);
        return;
      }
      obj[control.ID] = control.value || "";
    });

    this.ybss.SaveObj(this.house.id, this.obj_id, "company", obj, null, (res) => {
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
    comp_type: [
      {
        label: '事业单位',
        value: '事业单位'
      },
      {
        label: '旅店',
        value: '旅店'
      },
      {
        label: '其他',
        value: '其他'
      },
    ],
    comp_xz_type: [
      {
        label: '国有',
        value: '国有'
      },
      {
        label: '私营',
        value: '私营'
      },
      {
        label: '其他',
        value: '其他'
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

    comp_prop_type: [
      {
        label: '单位属性1',
        value: '单位属性1'
      },
      {
        label: '单位属性2',
        value: '单位属性2'
      },
      {
        label: '单位属性3',
        value: '单位属性3'
      },
    ],
    top_comp_type: [
      {
        label: '上级单位1',
        value: '上级单位1'
      },
      {
        label: '上级单位2',
        value: '上级单位2'
      },
      {
        label: '上级单位3',
        value: '上级单位3'
      },
    ],
    has_video_monitor: [
      {
        label: '有',
        value: true
      },
      {
        label: '无',
        value: false
      }
    ],
  };

  controls: any = [
    {
      ID: 'name',
      type: 2,
      name: '单位名称',
      value: '',
      required: true
    },
    {
      ID: 'comp_type',
      type: 4,
      name: '单位分类',
      value: '',
      required: true
    },
    {
      ID: 'comp_xz_type',
      type: 4,
      name: '单位性质',
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
      ID: 'alias_name',
      type: 2,
      name: '单位俗称',
      value: '',
      // required: true
    },
    {
      ID: 'comp_no1',
      type: 2,
      name: '组织机构代码',
      value: '',
      // required: true
    },
    {
      ID: 'comp_prop_type',
      type: 4,
      name: '单位属性',
      value: '',
      // required: true
    },
    {
      ID: 'phone',
      type: 8,
      name: '单位联系电话',
      value: '',
      // required: true
    },
    {
      ID: 'top_comp_type',
      type: 4,
      name: '上级单位',
      value: '',
      // required: true
    },
    {
      ID: 'scope',
      type: 3,
      name: '经营范围',
      value: '',
      // required: true
    },
    {
      ID: 'comp_no2',
      type: 2,
      name: '税务登记号',
      value: '',
      // required: true
    },
    {
      ID: 'has_video_monitor',
      type: 4,
      name: '是否有视频监控',
      value: '',
    },
    {
      ID: 'comp_no3',
      type: 2,
      name: '营业执照号',
      value: '',
    },
    {
      ID: 'reg_date',
      type: 7,
      name: '注册日期',
      value: '',
    },
    {
      ID: 'reg_money',
      type: 8,
      name: '注册资本(万)',
      value: '',
    },
    {
      ID: 'fz_date',
      type: 7,
      name: '发照日期',
      value: '',
    },
    {
      ID: 'expire_date',
      type: 7,
      name: '有效期至',
      value: '',
    },
    {
      ID: 'reg_address',
      type: 2,
      name: '注册地址',
      value: '',
    },
    {
      ID: 'address',
      type: 2,
      name: '主地址',
      value: '',
      required: true,
      can_scan: true
    },
  ];

}
