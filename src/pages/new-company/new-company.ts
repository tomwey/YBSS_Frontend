import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    console.log(this.controls);
  }

  selectOptionsData: any = {
    comp_type: [
      {
        label: '集团公司',
        value: '1'
      },
      {
        label: '有限公司',
        value: '2'
      },
      {
        label: '外资公司',
        value: '3'
      },
    ],
    comp_xz_type: [
      {
        label: '性质1',
        value: '1'
      },
      {
        label: '性质2',
        value: '2'
      },
      {
        label: '性质3',
        value: '3'
      },
    ],
    manage_level: [
      {
        label: '常规管理 (A)',
        value: '1'
      },
      {
        label: '常规管理 (B)',
        value: '2'
      },
      {
        label: '常规管理 (C)',
        value: '3'
      },
    ],

    comp_prop_type: [
      {
        label: '单位属性1',
        value: '1'
      },
      {
        label: '单位属性2',
        value: '2'
      },
      {
        label: '单位属性3',
        value: '3'
      },
    ],
    top_comp_type: [
      {
        label: '上级单位1',
        value: '1'
      },
      {
        label: '上级单位2',
        value: '2'
      },
      {
        label: '上级单位3',
        value: '3'
      },
    ],
    has_video: [
      {
        label: '有',
        value: '1'
      },
      {
        label: '无',
        value: '2'
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
      ID: 'manage_level',
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
      ID: 'has_video',
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
