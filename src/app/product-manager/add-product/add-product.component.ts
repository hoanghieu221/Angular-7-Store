import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../../product/Product';
import {ActivatedRoute,Route,Router} from '@angular/router';
import {HeroService} from '../../Service/hero.service';
import {NgForm} from '@angular/forms';
import { ListCategory } from '../../header/category/ListCategory';
import { Cate } from '../../header/category/Cate';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
@Input() listProduct:Product[];

newProduct:Product =  new Product();

  constructor(private heroService: HeroService,
    private route: ActivatedRoute) {
      this.getListCategory();
     }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const {listId} = param;
      const {cateId} = param;
      this.heroService.getListCategoryFromId(listId).subscribe(data =>  this.nameListCategory = data.name)
      this.heroService.getCategoryFromId(listId,cateId).subscribe(data =>  this.nameCategory = data.name)
    })
     
  }

  listCategory : ListCategory [];
  category: Cate[];
  nameListCategory:String;
  nameCategory:String;

  idListCategory:number;
  idCategory:number;
  getListCategory(): void {
    this.heroService.getListCategory().subscribe(data => this.listCategory = data);
  }

  addProduct(){
      this.route.params.subscribe(param => {
        const {listId} = param;
        const {cateId} = param;
        this.heroService.addProduct(cateId,listId,this.newProduct).subscribe(data => {
            this.listProduct.push(data);
        })
      })
  }

  onSubmit(formAdd: NgForm){
    if(formAdd.valid){
      this.addProduct();
      document.getElementById('closeModal').click();
      formAdd.reset();
    }
  }

  onListCategory(name:string,idList:number) : void{
      this.nameListCategory = name;
      this.idListCategory = idList;
      this.heroService.getCategory(idList).subscribe( data => this.category = data);  
  }

  onCategory(name:string) :void{
    this.nameCategory = name;
  }

}
