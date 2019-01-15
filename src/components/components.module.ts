import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { CommonFormComponent } from './common-form/common-form';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
	declarations: [
		CommonFormComponent],
	imports: [IonicPageModule.forChild([CommonFormComponent]), IonicImageViewerModule],
	exports: [CommonFormComponent]
})
export class ComponentsModule { }
