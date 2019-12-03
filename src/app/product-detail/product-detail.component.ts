import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product/Product';
import {HeroService} from '../Service/hero.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  constructor(private heroService:HeroService,
              private route : ActivatedRoute,
              private router : Router) { 
                this.getProductFromId();
                this.getCategoryFromId();
                this.getListcategoryFromId();
              }
  listId :number ;
  cateid:number ;
  fashionId: number;

  nameListCategory : String;
  nameCategory : String;

  detail : Product;
  ngOnInit() {
  
  }

  getProductFromId(){
    this.route.params.subscribe(param => {
      const {listId} = param;
      const {cateId} = param;
      const {fashionId} = param;
      this.listId = listId;
      this.cateid = cateId;
      this.heroService.getProductFromId(listId,cateId,fashionId).subscribe(data => {
        this.detail = data;
      }
      );
    })
    }

  getListcategoryFromId() : void {
      this.heroService.getListCategoryFromId(this.listId).subscribe(data => this.nameListCategory = data.name);
  }


  getCategoryFromId() : void {
      this.heroService.getCategoryFromId(this.listId, this.cateid).subscribe(data => this.nameCategory = data.name);
  }


  goBack(){
    this.route.params.subscribe(param => {
      const {listId} = param; 
      const {cateId} = param;
      this.router.navigateByUrl(`/ListCategory/${listId}/category/${cateId}/fashion`);
    })

  }

  
}