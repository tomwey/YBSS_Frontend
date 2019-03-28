import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YBSS } from '../../provider/YBSS';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  title: any;
  pid: any;
  data: any = [];
  constructor(public navCtrl: NavController,
    private ybss: YBSS,
    public navParams: NavParams) {
    this.title = this.navParams.data.title;
    this.pid = this.navParams.data.pid;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CategoryPage');
    this.loadData();
  }

  loadData() {
    this.ybss.GetCategories(this.pid, (res) => {
      this.data = res;
    });
  }

  open(item) {
    if (item.has_child) {
      this.navCtrl.push('CategoryPage', { title: item.name, pid: item.id });
    } else {
      this.navCtrl.push('ArticleListPage', { title: item.name, cid: item.id });
    }

  }

}
