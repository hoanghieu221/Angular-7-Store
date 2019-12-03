import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../Service/hero.service';
import {Cate} from '../category/Cate';
import {ListCategory} from './ListCategory';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private heroService: HeroService) { 
this.getListCategory();
  }

cate : Cate[];
listCategory : ListCategory[]; 
  ngOnInit() {
   
  }

  getCategory(idCate:number):void{
    this.heroService.getCategory(idCate).subscribe(data => this.cate = data);
  }


  getListCategory(): void {
    this.heroService.getListCategory().subscribe(data => this.listCategory = data);
  }
}
