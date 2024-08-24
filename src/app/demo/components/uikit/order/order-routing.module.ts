import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OrderComponent }
	])],  exports: [RouterModule]
})
export class OrderRoutingModule { }
