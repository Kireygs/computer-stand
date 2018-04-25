import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products.model';
import { Build } from './build.model';


@Injectable()
export class BuildProvider {

  private host: string = 'http://localhost:3000/api/products/';

  constructor(public http: HttpClient) {}


    
    getProducts(category: string){
      let filter = {"where":{"categoryid":category}};
      let url = 'http://localhost:3000/api/products?filter='+JSON.stringify(filter);
      return this.http.get<Products[]>(url);
    }

    getComputers(){
      let url = 'http://localhost:3000/api/categories';
      return this.http.get<Build>(url);
    }


    getItemsByCategory(categ: string){
      let filter = {
        where: {
          categoryid: categ
        }
      };
      let url = this.host+'?filter='+JSON.stringify(filter);
      return this.http.get<Products>(url);
      }
}

