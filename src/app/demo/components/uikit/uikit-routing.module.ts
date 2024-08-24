import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'user', data: { breadcrumb: 'User' }, loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
        { path: 'debt', data: { breadcrumb: 'Debt' }, loadChildren: () => import('./debt/debt.module').then(m => m.DebtModule) },
        { path: 'product', data: { breadcrumb: 'Product' }, loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
        { path: 'order', data: { breadcrumb: 'Order' }, loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
        { path: 'seting', data: { breadcrumb: 'Seting' }, loadChildren: () => import('./seting/seting.module').then(m => m.SetingModule) },

        { path: '**', redirectTo: '/notfound' }
        
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
