// catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { CartService } from '../../services/cart.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  @Input() product !: Product ;
  
  products: Product[] = [];
  selectedProduct: Product | undefined;

 // constructor(private shoppingCart: ShoppingCart) {}
constructor(private cartservice : CartService ){}

showProductDetails(product: Product) {
  this.selectedProduct = product;
}

  ngOnInit(): void {
    // this.products = this.shoppingCart.getItems();
    this.products = this.cartservice.getItems();
  }

  addToCart(product: Product): void {
    // Assuming ShoppingCartItem has a constructor that takes a Product
    const shoppingCartItem = new ShoppingCartItem(product);
    this.cartservice.itemsProduct.push(shoppingCartItem);
  }
  

 
  loadProducts() {
    const product1 = new Product('product1', 2);
    product1.productTitle = "Tablette SAM 12 Pouce";
    product1.prouctPrice = "2334 DH";
    product1.productImage = "tablette.jpg";
  
    const product2 = new Product('product2', 4);
    product2.productTitle = "IPhone 14";
    product2.prouctPrice = "11000 DH";
    product2.productImage = "iphone.jpg";
  
    const product3 = new Product('product3', 6);
    product3.productTitle = "Smart TV 48 Pouce";
    product3.prouctPrice = "8000 DH";
    product3.productImage = "smartTV.jpg";
  
    const product4 = new Product('product4', 9);
    product4.productTitle = "IPhone 14 14";
    product4.prouctPrice = "8000 DH";
    product4.productImage = "iphone.jpg";
  
    const product5 = new Product('product5', 0);
    product5.productTitle = "Tablette SAM 12 Pouce";
    product5.prouctPrice = "2334 DH";
    product5.productImage = "tablette.jpg";
  
    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    this.products.push(product4);
    this.products.push(product5);
  
    this.products = this.products.filter(product => product.quantity > 0);
  }
}
