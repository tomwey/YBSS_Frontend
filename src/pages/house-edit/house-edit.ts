import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the HouseEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-house-edit',
  templateUrl: 'house-edit.html',
})
export class HouseEditPage {

  constructor(public navCtrl: NavController,
    private events: Events,
    public navParams: NavParams) {

    this.events.subscribe("item:selected", (control) => {
      if (control.ID === 'manage_level') {
        // 9
        if (this.controls.length > 9) {
          this.controls.splice(9, 1);
        }

        if (control.value === '重点管控类（A）') {
          this.controls.push({
            ID: "reason",
            type: 2,
            name: "管控理由",
            value: "",
            required: true
          });
        } else if (control.value === '重点关注类（B）') {
          this.controls.push({
            ID: "reason",
            type: 2,
            name: "关注理由",
            value: "",
            required: true
          });
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseEditPage');
  }

  controlSelect(control) {
    // console.log(control);
    const data = this.selectOptionsData[control.ID];
    this.navCtrl.push('CommonSelectPage', { data: data, control: control });
  }

  selectOptionsData: any = {
    yt_type: [
      {
        label: '居住',
        value: '1'
      },
      {
        label: '租用',
        value: '2'
      }
    ],
    _type: [
      {
        label: '类型1',
        value: '1'
      },
      {
        label: '类型2',
        value: '2'
      }
    ],
    jg_type: [
      {
        label: '类型1',
        value: '1'
      },
      {
        label: '类型2',
        value: '2'
      }
    ],
    manage_level: [
      {
        label: '重点管控类（A）',
        value: '1'
      },
      {
        label: '重点关注类（B）',
        value: '2'
      },
      {
        label: '常规管理类（C）',
        value: '3'
      },
    ],
    use_type: [
      {
        label: '类型1',
        value: '1'
      },
      {
        label: '类型2',
        value: '2'
      }
    ],
  };

  // controls: any = [];

  controls: any = [
    {
      ID: "image",
      type: 20,
      name: "房屋图片",
      value: null,
      required: true
    },
    {
      ID: 'yt_type',
      type: 4,
      name: '房屋用途',
      value: '',
      required: true
    },
    {
      ID: '_type',
      type: 4,
      name: '房屋类型',
      value: '',
      required: false
    },
    {
      ID: 'jg_type',
      type: 4,
      name: '结构类型',
      value: '',
      required: false
    },
    {
      ID: 'name',
      type: 2,
      name: '小区名称',
      value: '',
      // required: true
    },
    {
      ID: 'area',
      type: 2,
      name: '面积(平方米m²)',
      value: '',
      // required: true
    },
    {
      ID: 'rooms',
      type: 2,
      name: '房间数(个)',
      value: '',
      // required: true
    },
    {
      ID: 'manage_level',
      type: 4,
      name: '管理等级',
      value: '',
      required: true
    },
    {
      ID: 'use_type',
      type: 4,
      name: '使用类型',
      value: '',
      required: true
    }
  ];

}
