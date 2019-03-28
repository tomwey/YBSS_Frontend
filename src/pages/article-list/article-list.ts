import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArticleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-list',
  templateUrl: 'article-list.html',
})
export class ArticleListPage {

  title: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.data.title;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticleListPage');
  }

}
