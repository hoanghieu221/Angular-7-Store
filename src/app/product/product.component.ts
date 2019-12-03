import { Component, OnInit } from '@angular/core';
import { HeroService } from '../Service/hero.service';
import { Product } from './Product';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  listProduct: Product[];
  constructor(private heroService: HeroService,
    private route: ActivatedRoute) {
    this.getProducts();

  }

  ngOnInit() {
  }

  listId : number;
  cateId : number;


  getProducts(): void {
    this.route.params.subscribe(param => {
      const {listId} = param;
      const {cateId} = param;
      this.listId = listId;
      this.cateId = cateId;
      this.heroService.getProducts(cateId,listId).subscribe(data => 
        { return this.listProduct = data});
    })
  }




}
