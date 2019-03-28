import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YBSS } from '../../provider/YBSS';

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
  cid: any = null;
  data: any = [];
  error: any = null;

  constructor(public navCtrl: NavController,
    private ybss: YBSS,
    public navParams: NavParams) {
    this.title = this.navParams.data.title;
    this.cid = this.navParams.data.cid;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticleListPage');
    setTimeout(() => {
      this.loadData();
    }, 300);
  }

  loadData() {
    this.ybss.GetArticles(this.cid, (res) => {
      this.data = res;
      this.error = this.data.length === 0 ? '暂无文章' : null;
    });
  }

  openArticle(article) {
    if (article.body_url) {
      this.navCtrl.push('BrowserPage', { title: article.title, url: article.body_url });
    } else {
      this.navCtrl.push('ArticleDetailPage', { article: article });
    }
  }

}
