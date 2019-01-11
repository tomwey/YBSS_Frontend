import { Component, ViewChild } from '@angular/core';
import { /*IonicPage,*/ NavController, NavParams, Content } from 'ionic-angular';
import { Users } from '../../provider/Users';
// import { LoginPage } from '../../pages/login/login';
import { iOSFixedScrollFreeze } from '../../provider/iOSFixedScrollFreeze';
import { Tools } from '../../provider/Tools';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  user: any = {
    avatar: '',
    name: '',
    mobile: ''
  };
  error: any = null;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
    private users: Users,
    // private app: App,
    // private events: Events,
    private tools: Tools,
    private iosFixed: iOSFixedScrollFreeze,
    // private modalCtrl: ModalController,
    // private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.iosFixed.fixedScrollFreeze(this.content);

    // this.events.subscribe('user:reload', () => {
    //   this.loadUserData();
    // });
    // console.log('ionViewDidLoad SettingPage');
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.users.GetUserProfile()
      .then(data => {
        // console.log(data);
        if (data && data['data']) {
          this.user = data['data'];
        }
      })
      .catch(error => {
        this.tools.showToast(error.message || '服务器出错了~');
      })
  }

}
