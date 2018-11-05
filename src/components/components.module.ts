import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { CommonFormComponent } from './common-form/common-form';

@NgModule({
	declarations: [
    CommonFormComponent],
	imports: [IonicPageModule.forChild([CommonFormComponent])],
	exports: [CommonFormComponent]
})
export class ComponentsModule {}
