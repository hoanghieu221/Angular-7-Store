import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import {HeroService} from './Service/hero.service';

//HTTP
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { CategoryComponent } from './header/category/category.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './home/explore/explore.component';
import { BlogComponent } from './home/blog/blog.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';
import { ProductHeaderComponent } from './product/product-header/product-header.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AddProductComponent } from './product-manager/add-product/add-product.component';
import { UpdateProductComponent } from './product-manager/update-product/update-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Transalte
import {TranslateService} from '../app/Service/translate.service';

export function setupTranslateFactory(service: TranslateService) : Function {
  return () => service.use('vi');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    ProductDetailComponent,
    CarouselComponent,
    CategoryComponent,
    HomeComponent,
    ExploreComponent,
    BlogComponent,
    MenuHeaderComponent,
    ProductHeaderComponent,
    ProductManagerComponent,
    AddProductComponent,
    UpdateProductComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeroService,TranslateService,
      {
        provide: APP_INITIALIZER,
        useFactory: setupTranslateFactory,
        deps: [TranslateService], 
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
