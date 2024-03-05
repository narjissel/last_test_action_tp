import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ShoppingCartItem } from '../models/ShoppingCartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsProduct: Array<ShoppingCartItem>;
  total: number;

  constructor() {
    this.itemsProduct = new Array()
    this.total = 0
   }
   public addItem(shoppingCartItem: ShoppingCartItem){
    let elem : ShoppingCartItem | undefined = this.itemsProduct.find(x => x.itemProduct.productID == shoppingCartItem.itemProduct.productID)

    
    if(elem == undefined){
    
        this.itemsProduct.push(shoppingCartItem)
    } else {
        //let currentShoppingCartItem = this.itemsProduct[index]
        elem.addProduct(shoppingCartItem)
    }
}

public removeItem(shoppingCartItem: ShoppingCartItem){
    let elem : ShoppingCartItem | undefined = this.itemsProduct.find(x => x.itemProduct.productID == shoppingCartItem.itemProduct.productID)
    if(elem != undefined){
    
        elem.subtractProduct(shoppingCartItem)
        if(elem.quantity == 0){
            this.itemsProduct.splice(this.itemsProduct.indexOf(shoppingCartItem), 1)
        }
    }
}

getItems(): Product[] {
  return this.itemsProduct.map(item => item.itemProduct);
}
   
}
