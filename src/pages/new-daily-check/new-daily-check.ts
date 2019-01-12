import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../provider/Store';
import { Tools } from '../../provider/Tools';
import { YBSS } from '../../provider/YBSS';

/**
 * Generated class for the NewDailyCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-daily-check',
  templateUrl: 'new-daily-check.html',
})
export class NewDailyCheckPage {

  selectOptionsData: any = {};
  controls: any = [];

  house: any;
  obj_id: any;
  type: any;

  constructor(public navCtrl: NavController,
    private store: Store,
    private tools: Tools,
    private ybss: YBSS,
    public navParams: NavParams) {
    // this.address = this.navParams.data.address;
    this.house = this.navParams.data.house;
    this.obj_id = this.navParams.data.id;
    this.type = this.navParams.data.type;

    if (this.navParams.data && this.navParams.data.type == '1') {
      // 房屋日常检查
      this.controls = [
        {
          ID: "images",
          type: 20,
          name: "检查照片",
          value: null,
          multiple: true,
          required: true
        },
        {
          ID: 'has_man',
          type: 4,
          name: '是否有居住人员',
          value: '',
          required: true
        },
        {
          ID: 'has_error',
          type: 4,
          name: '有无异常情况',
          value: '',
          // required: true
        },
        {
          ID: 'check_on',
          type: 7,
          name: '检查日期',
          value: '',
          required: true
        },
        {
          ID: 'memo',
          type: 3,
          name: '备注信息',
          value: '',
          required: true
        },
      ];

      this.selectOptionsData = {
        has_man: [
          {
            label: '无',
            value: "无"
          },
          {
            label: '有',
            value: "有"
          },
        ],
        has_error: [
          {
            label: '无',
            value: "无"
          },
          {
            label: '有',
            value: "有"
          },
        ]
      };
    } else {
      // 单位日常检查
      this.controls = [
        {
          ID: "images",
          type: 20,
          name: "检查照片",
          value: null,
          multiple: true,
          required: true
        },
        {
          ID: 'name',
          type: 2,
          name: '单位名称',
          value: '',
          required: true
        },
        {
          ID: 'has_error',
          type: 4,
          name: '有无异常情况',
          value: '',
          // required: true
        },
        {
          ID: 'check_on',
          type: 7,
          name: '检查日期',
          value: '',
          required: true
        },
        {
          ID: 'memo',
          type: 3,
          name: '备注信息',
          value: '',
          required: true
        },
      ];

      this.selectOptionsData = {
        has_error: [
          {
            label: '无',
            value: "无"
          },
          {
            label: '有',
            value: "有"
          },
        ]
      };
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewDailyCheckPage');
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

    const fileControl = this.controls[0];
    let files;
    if (fileControl.required) {
      files = this.controls[0].value;
      console.log(files);
      if (!files || files.length === 0) {
        this.tools.showToast(`${fileControl.name}不能为空`);
        return;
      }
    }

    let obj = {};
    this.controls.forEach(control => {
      if (control.ID !== "images") {
        if (control.required && !control.value) {
          this.tools.showToast(`${control.name}不能为空`);
          return;
        }

        obj[control.ID] = control.value || "";

      }
    });

    if (this.type !== "1") {
      obj["has_man"] = "有"; // 给一个默认值
    }
    // this.store.addItem(obj, "peoples", () => {
    //   this.tools.showToast("录入成功");
    //   this.navCtrl.pop();
    // });
    // this.store.addPeople(this.address.ID, "1", obj, () => {
    //   this.tools.showToast("录入成功");
    //   this.navCtrl.pop();
    // });
    this.ybss.SaveObj(this.house.id, this.obj_id, "daily_check", obj, files, (res) => {
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const element = res[key];
          this.house[key] = element;
        }
      }
      this.navCtrl.pop();
    });
  }

}
