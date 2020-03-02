//custom routing module

import {NgModule} from "@angular/core" ;
import {Route, RouterModule} from "@angular/router";
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductModule } from './product.module';
import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { ProductsResolveService} from "../product/resolvers/products.service";

const routes : Route[] =[
    {
        // path:"products",   //lazy loaded module then have products/products
        path:"" , //products products come from app.module load children
        component : ProductHomeComponent ,

        children :[
            {
                path :"",//default the list page as child component when visit the products page
                component : ProductListComponent,
                resolve:{
                products: ProductsResolveService
                },
                data:{
                    roles:['admin' , 'staff']
                }
            },
            {
                path :"create",
                component : ProductEditComponent,
                canDeactivate : [SaveAlertGuard]
            },
            {
                path :"edit/:id",
                component : ProductEditComponent, 
                canActivate : [CanEditGuard],  // array of services, all the guard should return true
                canDeactivate : [SaveAlertGuard]
            },
            {
                path :"search",
                component : ProductSearchComponent
            },
        ]
    }

]

@NgModule({

imports:[
    ProductModule,
    RouterModule.forChild(routes)
]

})

export class ProductRoutingModule{

}