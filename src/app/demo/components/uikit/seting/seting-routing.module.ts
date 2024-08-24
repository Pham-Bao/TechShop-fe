import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetingComponent } from './seting.component';
const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: SetingComponent }
	])],  exports: [RouterModule]
})
export class SetingRoutingModule { }
