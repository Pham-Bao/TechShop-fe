import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebtComponent } from './debt.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: DebtComponent }
	])],  exports: [RouterModule]
})
export class DebtRoutingModule { }
