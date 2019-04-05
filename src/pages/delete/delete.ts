import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { YBSS } from '../../provider/YBSS';
import { Tools } from '../../provider/Tools';
import { Users } from '../../provider/Users';

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {

  title: any = '注销';
  deleteData: any = {};
  constructor(public navCtrl: NavController,
    private ybss: YBSS,
    private tools: Tools,
    private users: Users,
    private events: Events,
    public navParams: NavParams) {
    // this.selectOptionsData['reason'] = this.navParams.data.reasons;
    this.deleteData = this.navParams.data;
    this.fillSelectOptions();
  }

  fillSelectOptions() {
    switch (this.deleteData.class) {
      case 'house':
        {
          this.selectOptionsData['reason'] = [{ label: '房屋拆除', value: '房屋拆除' }];
          break;
        }
      case 'property_info': {
        this.selectOptionsData['reason'] = [{ label: '产权变更', value: '产权变更' }, { label: '操作失误', value: '操作失误' }];
        break;
      }
      case 'daily_check': {
        this.selectOptionsData['reason'] = [{ label: '操作失误', value: '操作失误' }];
        break;
      }
      case 'person': {
        this.selectOptionsData['reason'] = [{ label: '该人已不在此居住', value: '该人已不在此居住' }, { label: '操作失误', value: '操作失误' }];
        break;
      }
      case 'company': {
        this.selectOptionsData['reason'] = [{ label: '该公司已不在此办公', value: '该公司已不在此办公' }, { label: '操作失误', value: '操作失误' }];
        break;
      }
      case 'employee': {
        this.selectOptionsData['reason'] = [{ label: '该从业人员已离职', value: '该从业人员已离职' }, { label: '操作失误', value: '操作失误' }];
        break;
      }
      default:
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DeletePage');
  }

  commit() {
    let obj = {};
    if (!this.controls[0].value) {
      this.tools.showToast('注销原因不能为空');
      return;
    }

    obj['id'] = this.deleteData.house_id;
    obj['obj_id'] = this.deleteData.item_id;
    obj['class'] = this.deleteData.class;
    obj['reason'] = this.controls[0].value;
    obj['memo'] = this.controls[1].value;

    this.users.token().then(token => {
      obj['token'] = token;
      this.ybss.DeleteObj(this.deleteData.class, obj, (res) => {
        this.tools.showToast("注销成功！");
        this.events.publish('removed', res);
        this.navCtrl.pop();
        // for (const key in res) {
        //   if (res.hasOwnProperty(key)) {
        //     const element = res[key];
        //     this.house[key] = element;
        //   }
        // }
      });
    });


  }

  controlSelect(control) {
    // console.log(control);
    const data = this.selectOptionsData[control.ID];
    this.navCtrl.push('CommonSelectPage', { data: data, control: control });
  }

  selectOptionsData: any = {
    reason: [
    ],
  }

  controls: any = [
    {
      ID: 'reason',
      type: 4,
      name: '注销原因',
      value: '',
      required: true
    },
    {
      ID: 'memo',
      type: 3,
      name: '备注信息',
      value: '',
      required: false
    },
  ];

}
