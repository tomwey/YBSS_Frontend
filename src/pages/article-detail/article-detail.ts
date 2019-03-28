import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html',
})
export class ArticleDetailPage {

  // title: any;
  article: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.title = this.navParams.data.title;
    this.article = this.navParams.data.article;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticleDetailPage');
  }

}
