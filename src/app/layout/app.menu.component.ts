import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Trang Chủ',
                items: [
                    { label: 'Tổng quan', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Người dùng', icon: 'pi pi-fw pi-user', routerLink: ['/uikit/user'] },
                    { label: 'Công nợ', icon: 'pi pi-fw pi-wallet', routerLink: ['/uikit/debt'] },
                    { label: 'Sản phẩm', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/product'] },
                    { label: 'Đơn hàng', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/uikit/order'] },
                    { label: 'Sửa chữa', icon: 'pi pi-fw pi-wrench', routerLink: ['/uikit/seting'] },


                ]
                
            },



        ];
    }
}
