import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Product} from '../product/Product';
import {Cate} from '../header/category/Cate';
import {ListCategory} from '../header/category/ListCategory';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

private urlAPI = "http://5ca5f5013a08260014278d57.mockapi.io/category";
private urlListCategory = "http://5ca5f5013a08260014278d57.mockapi.io/ListCategory";
  constructor(private http : HttpClient) { }

  // Service Product
  getProducts(cateId:Number,listId:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.urlListCategory}/${listId}/category/${cateId}/fashion`);
  }

  getProductFromId(listId:Number,cateId:Number ,fashionId: Number) : Observable<Product>{
      return this.http.get<Product>(`${this.urlListCategory}/${listId}/category/${cateId}/fashion/${fashionId}`);
  }

  //Service Category
  getCategory(idCate:number) : Observable<Cate[]>{
    return this.http.get<Cate[]>(`${this.urlListCategory}/${idCate}/category`);
  }


  getListCategory() : Observable<ListCategory[]>{
    return this.http.get<ListCategory[]>(this.urlListCategory);
  }


  getCategoryFromId(listId, cateId) : Observable<Cate>{
    return this.http.get<Cate>(`${this.urlListCategory}/${listId}/category/${cateId}`);
  }

  getListCategoryFromId(listId) : Observable<ListCategory>{
    return this.http.get<ListCategory>(`${this.urlListCategory}/${listId}`);
  }


  addProduct(cateId:Number,listId:number,product): Observable<Product>{
      return this.http.post<Product>(`${this.urlListCategory}/${listId}/category/${cateId}/fashion`,product);
  }

  deleteProduct(cateId:Number,listId:number,product){
    return this.http.delete<Product>(`${this.urlListCategory}/${listId}/category/${cateId}/fashion/${product.id}`);
  }

  updateProduct(listId,cateId,fashionId,product:Product) : Observable<Product> {
    return this.http.put<Product>(`${this.urlListCategory}/${listId}/category/${cateId}/fashion/${fashionId}`,product);
  }


}

