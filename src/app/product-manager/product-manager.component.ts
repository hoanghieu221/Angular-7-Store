import { Component, OnInit } from '@angular/core';
import { ListCategory } from '../header/category/ListCategory';
import { Cate } from '../header/category/Cate';
import { HeroService } from '../Service/hero.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product/Product';
import {TranslateService} from '../Service/translate.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {


  constructor(private heroService: HeroService,
    private route: ActivatedRoute , 
    private translate : TranslateService ) {
    this.getListCategory();
    this.translate.use('vi').then( () => {
      console.log(this.translate.data);
    })
  }

  ngOnInit() {
    this.getProducts();
    this.getCategoryFromId();
    this.getListcategoryFromId();
  }


  newProduct:Product =  new Product();

  cate: Cate[];
  listCategory: ListCategory[];
  listProduct: Product[];

  listId: number;
  cateId: number;
  fashionId: number;

  nameListCategory : String;
  nameCategory : String;
  
  getCategory(idCate: number): void {
    this.heroService.getCategory(idCate).subscribe(data => this.cate = data);
  }



  getListCategory(): void {
    this.heroService.getListCategory().subscribe(data => this.listCategory = data);
  }


  getProducts(): void {
    this.route.params.subscribe(param => {
      const { listId } = param;
      const { cateId } = param;
      this.listId = listId;
      this.cateId = cateId;
      this.heroService.getProducts(cateId, listId).subscribe(data => {
        return this.listProduct = data
      });
    })
  }

  deleteProduct(product:Product){
    this.route.params.subscribe(param => {
      const { listId } = param;
      const { cateId } = param;
      this.heroService.deleteProduct(cateId, listId , product).subscribe(data => {
        this.listProduct = this.listProduct.filter(word => word.id != data.id);
      })
    })
  }

  getListcategoryFromId() : void {
    this.route.params.subscribe(param => {
      const { listId } = param;
      this.heroService.getListCategoryFromId(listId).subscribe(data => this.nameListCategory = data.name);
    })
}


getCategoryFromId() : void {
  this.route.params.subscribe(param => {
    const { listId } = param;
    const { cateId } = param;
    this.heroService.getCategoryFromId(listId,cateId).subscribe(data => this.nameCategory = data.name);
  })
}


}
