import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { YBSS } from '../../provider/YBSS';
// import { elementEnd } from '@angular/core/src/render3/instructions';
// import { CommonSelectPageModule } from '../common-select/common-select.module';
import { Tools } from '../../provider/Tools';

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

  house: any;
  constructor(public navCtrl: NavController,
    private events: Events,
    private ybss: YBSS,
    private tools: Tools,
    public navParams: NavParams) {

    this.house = this.navParams.data;

    this.populateForm();

    this.events.subscribe("item:selected", (control) => {
      this.prepareOtherControls(control);
    });
  }

  populateForm() {
    this.controls.forEach(control => {
      if ((control.type == 4 || control.type == 5 || control.type == 6)) {
        let val = this.house[control.ID];
        // if (control.ID === "_type") {
        //   val = this.house["type"];
        // }
        if (control.ID === "house_use") {
          val = this.house[control.ID][0];
        }
        if (val) {
          control.value = val;
        }

        this.prepareOtherControls(control);

      } else if (control.type == 20) {

      } else {
        // if (control.ID === "_type") {
        //   control.value = this.house["type"] || '';
        // } else {
        // console.log(control.ID);
        // console.log(this.house[control.ID]);
        control.value = this.house[control.ID] || '';
        // }

      }
    });
  }

  reset() {
    this.populateForm();
  }

  save() {
    let file = null;
    if (this.controls[0].value) {
      let files = this.controls[0].value;
      if (files.length > 0) {
        file = files[0];
      }
    }

    let payload = {};
    this.controls.forEach(control => {

      if (control.ID !== "image") {
        if (control.required && !control.value) {
          this.tools.showToast(`${control.name}不能为空`);
          return;
        }

        if (control.ID === "house_use") {
          payload["house_use"] = [control.value || ""];
        } else {
          payload[control.ID] = control.value || "";
        }
      }
    });

    this.ybss.UpdateHouse(this.house.id, file, payload, (res) => {
      // console.log(res);
      // this.house = res;
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const element = res[key];
          this.house[key] = element;
        }
      }
      this.navCtrl.pop();
    });
  }

  prepareOtherControls(control) {
    if (control.ID === 'mgr_level') {
      const index = this.controls.indexOf(control);
      let _control = this.controls[index + 1];
      if (_control.ID === "mgr_reason") {
        this.controls.splice(index + 1, 1);
      }

      if (control.value === '重点管控类（A）') {
        this.controls.splice(index + 1, 0, {
          ID: "mgr_reason",
          type: 2,
          name: "管控理由",
          value: this.house["mgr_reason"] || "",
          required: true
        });
      } else if (control.value === '重点关注类（B）') {
        this.controls.splice(index + 1, 0, {
          ID: "mgr_reason",
          type: 2,
          name: "关注理由",
          value: this.house["mgr_reason"] || "",
          required: true
        });
      }
    } else if (control.ID === "use_type") {
      const index = this.controls.indexOf(control);
      let _control = this.controls[index + 1];
      if (_control.ID === "rent_type") {
        this.controls.splice(index + 1, 1);
      }
      if (control.value === "一般租借") {
        this.controls.splice(index + 1, 0, {
          ID: "rent_type",
          type: 4,
          name: "租借类型",
          value: this.house["rent_type"] || "",
          required: true
        });
      }
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HouseEditPage');
  }

  controlSelect(control) {
    // console.log(control);
    const data = this.selectOptionsData[control.ID];
    this.navCtrl.push('CommonSelectPage', { data: data, control: control });
  }

  selectOptionsData: any = {
    house_use: [
      {
        label: '居住',
        value: '居住'
      },
      {
        label: '生产',
        value: '生产'
      },
      {
        label: '经营',
        value: '经营'
      },
      {
        label: '办公',
        value: '办公'
      },
      {
        label: '仓储',
        value: '仓储'
      },
      {
        label: '其他',
        value: '其他'
      }
    ],
    _type: [
      {
        label: '单元楼',
        value: '单元楼'
      },
      {
        label: '筒子楼',
        value: '筒子楼'
      },
      {
        label: '别墅',
        value: '别墅'
      },
      {
        label: '自建小楼',
        value: '自建小楼'
      },
      {
        label: '独立平房',
        value: '独立平房'
      },
      {
        label: '四合院平房',
        value: '四合院平房'
      },
      {
        label: '临时工棚',
        value: '临时工棚'
      },
      {
        label: '其他',
        value: '其他'
      }
    ],
    jg_type: [
      {
        label: '框架',
        value: '框架'
      },
      {
        label: '砖混',
        value: '砖混'
      },
      {
        label: '土墙',
        value: '土墙'
      },
      {
        label: '立材夹壁',
        value: '立材夹壁'
      },
      {
        label: "其他",
        value: "其他"
      }
    ],
    mgr_level: [
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
        label: '自用',
        value: '自用'
      },
      {
        label: '一般租借',
        value: '一般租借'
      },
      {
        label: '其他租借',
        value: '其他租借'
      },
      {
        label: '闲置',
        value: '闲置'
      },
      {
        label: '其他',
        value: '其他'
      },
      {
        label: '暂未查明',
        value: '暂未查明'
      },
    ],
    rent_type: [
      {
        label: "整租房",
        value: "整租房"
      },
      {
        label: "合租房",
        value: "合租房"
      },
    ]
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
      ID: 'house_use',
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
      ID: 'plot_name',
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
      ID: 'rooms_count',
      type: 2,
      name: '房间数(个)',
      value: '',
      // required: true
    },
    {
      ID: 'mgr_level',
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
    },
    {
      ID: 'memo',
      type: 3,
      name: '房屋备注',
      value: '',
      required: true
    }
  ];

}
