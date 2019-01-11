import { Component, ViewChild } from '@angular/core';
import { /*IonicPage,*/ NavController, NavParams, Content, App } from 'ionic-angular';
// import { ApiService } from '../../provider/api-service';
// import { DomSanitizer } from '@angular/platform-browser';
import { Users } from '../../provider/Users';
import { Tools } from '../../provider/Tools';
import { iOSFixedScrollFreeze } from '../../provider/iOSFixedScrollFreeze';
import { TabsPage } from '../tabs/tabs';
// import { SettingPage } from '../setting/setting';
// import { Utils } from '../../provider/Utils';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {
    mobile: '',
    password: ''
  };

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    // private api: ApiService,
    // private san: DomSanitizer,
    private app: App,
    private users: Users,
    private iosFixed: iOSFixedScrollFreeze,
    private tools: Tools,
  ) {

  }

  ionViewDidLoad() {
    this.iosFixed.fixedScrollFreeze(this.content);
    // console.log('ionViewDidLoad LoginPage');
    // this.loadUserAgreement();
  }

  doLogin() {
    this.users.Login(this.user.mobile, this.user.password)
      .then(data => {
        this.app.getRootNavs()[0].setRoot(TabsPage);
      })
      .catch(error => {
        this.tools.showToast(error);
      });

    // this.app.getRootNavs()[0].setRoot(TabsPage);
  }

  forgetPassword() {
    this.app.getRootNavs()[0].push('PasswordPage', { type: 1 });
  }

}
