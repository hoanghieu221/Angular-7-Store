import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {ProductDetailComponent} from '../app/product-detail/product-detail.component';
import {ProductComponent} from '../app/product/product.component';
import {HeaderComponent} from '../app/header/header.component';
import {HomeComponent} from '../app/home/home.component';
import {ProductManagerComponent} from '../app/product-manager/product-manager.component';
import {UpdateProductComponent} from '../app/product-manager/update-product/update-product.component';
import {PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';
const route : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"ListCategory/:listId/category/:cateId/fashion",component:ProductComponent},
  {path:"ListCategory/:listId/category/:cateId/fashion/:fashionId",component:ProductDetailComponent},
  {path:"ListCategory/:listId/category/:cateId/fashion/productManager/manager",component:ProductManagerComponent},
  {path:"ListCategory/:listId/category/:cateId/fashion/:fashionId/Update",component:UpdateProductComponent},
  {path:"home", component:HomeComponent},
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
