import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  user: any = {
    mobile: '',
    code: ''
  };

  codeBtnData: any = {
    text: '发送验证码',
    started: false,
    timer: null,
    seconds: 59,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  getCode() {
    if (this.codeBtnData.started) return;

    // this.users.GetCode(this.user.mobile)
    //   .then(data => {
    //     // console.log(data);
    //     this.startTimer();
    //   })
    //   .catch(error => {
    //     // console.log(error);
    //     this.tools.showToast(error.message || '服务器出错了');
    //   });
  }

  startTimer() {
    this.codeBtnData.started = true;
    this.codeBtnData.text = `${this.codeBtnData.seconds}秒后重新获取`;

    if (!this.codeBtnData.timer) {
      this.codeBtnData.timer = setInterval(() => {
        this.codeBtnData.seconds -= 1;
        if (this.codeBtnData.seconds <= 0) {
          clearInterval(this.codeBtnData.timer);
          this.codeBtnData.timer = null;
          this.codeBtnData.started = false;
          this.codeBtnData.seconds = 59;
          this.codeBtnData.text = '获取验证码';
        } else {
          this.codeBtnData.text = `${this.codeBtnData.seconds}秒后重新获取`;
        }
      }, 1000);
    }
  }

}
