import { NgModule } from '@angular/core';
import { Num2strPipe } from './num2str/num2str';
import { FormatDatePipe } from './format-date/format-date';
@NgModule({
	declarations: [
    Num2strPipe,
    FormatDatePipe],
	imports: [],
	exports: [Num2strPipe,
    FormatDatePipe]
})
export class PipesModule {}
