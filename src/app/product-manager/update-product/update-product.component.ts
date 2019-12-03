import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../../product/Product';
import {ActivatedRoute,Route,Router} from '@angular/router';
import {HeroService} from '../../Service/hero.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router) { 
this.getProductFromId();
     }

product : Product;
newProduct:Product = new Product();
  ngOnInit() {
    this.getProductFromId();
    this.getCategoryFromId();
    this.getListcategoryFromId();
  } 


  nameListCategory : String;
  nameCategory : String;

  stocking : Boolean;
  outStocking : Boolean;

  getProductFromId(): void {
    this.route.params.subscribe(param => {
      const {fashionId} = param;
      const { listId } = param;
      const { cateId } = param;
      this.heroService.getProductFromId(listId, cateId,fashionId).subscribe(data => {
       this.product = data;
       if(this.product.status == true){
            this.stocking = true;
       }else{
         this.outStocking = true;
       }
      });
    })
  }
  
  updateProduct(){
    this.route.params.subscribe(param => {
      const {fashionId} = param;
      const { listId } = param;
      const { cateId } = param;
      this.heroService.updateProduct(listId, cateId,fashionId,this.newProduct).subscribe( data => {
        this.router.navigateByUrl(`/ListCategory/${listId}/category/${cateId}/fashion/productManager/manager`)
      })
    })
  }  

  onSubmit(form:NgForm){
        this.updateProduct();

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

goBack(){
  this.route.params.subscribe(param => {
    const { listId } = param;
    const { cateId } = param;
    this.router.navigateByUrl(`ListCategory/${listId}/category/${cateId}/fashion/productManager/manager`);
  })
}

}
