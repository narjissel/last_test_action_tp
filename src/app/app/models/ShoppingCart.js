"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.itemsProduct = new Array();
        this.total = 0;
    }
    ShoppingCart.prototype.addItem = function (shoppingCartItem) {
        var elem = this.itemsProduct.find(function (x) { return x.itemProduct.productID == shoppingCartItem.itemProduct.productID; });
        if (elem == undefined) {
            this.itemsProduct.push(shoppingCartItem);
        }
        else {
            //let currentShoppingCartItem = this.itemsProduct[index]
            elem.addProduct(shoppingCartItem);
        }
    };
    ShoppingCart.prototype.removeItem = function (shoppingCartItem) {
        var elem = this.itemsProduct.find(function (x) { return x.itemProduct.productID == shoppingCartItem.itemProduct.productID; });
        if (elem != undefined) {
            elem.subtractProduct(shoppingCartItem);
            if (elem.quantity == 0) {
                this.itemsProduct.splice(this.itemsProduct.indexOf(shoppingCartItem), 1);
            }
        }
    };
    /* public getItems() {
         for(var index in this.itemsProduct){
             console.log("\n\n"  + this.itemsProduct[index].displayProduct() +"\n");
         }
     }*/
    //
    ShoppingCart.prototype.getItems = function () {
        return this.itemsProduct.map(function (item) { return item.itemProduct; });
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
/*
let productOne = new Product("REFAZER")
productOne.productTitle = "Tablette SAM 12 Pouce"
productOne.prouctPrice = "2334 DH"

let productTwo = new Product("ARRR")
productTwo.productTitle = "IPHONE 14 PRO"
productTwo.prouctPrice = "13000 DH"

let productThree= new Product("OOPPP")
productThree.productTitle = "SMART TV 42 P"
productThree.prouctPrice = "4000 DH"

let productFour= new Product("REFAZER")
productFour.productTitle = "Tablette SAM 12 Pouce"
productFour.prouctPrice = "2334 DH"

let productFive = new Product("ARRR")
productFive.productTitle = "IPHONE 14 PRO"
productFive.prouctPrice = "13000 DH"

let shoppingCartItemOne = new ShoppingCartItem(productOne)
let shoppingCartItemTwo = new ShoppingCartItem(productTwo)
let shoppingCartItemThree = new ShoppingCartItem(productThree)
let shoppingCartItemFour = new ShoppingCartItem(productFour)
let shoppingCartItemFive = new ShoppingCartItem(productFive)


let shoppingCart = new ShoppingCart()


shoppingCart.addItem(shoppingCartItemOne)
shoppingCart.addItem(shoppingCartItemTwo)
shoppingCart.addItem(shoppingCartItemThree)
shoppingCart.addItem(shoppingCartItemFour)
shoppingCart.addItem(shoppingCartItemFive)


console.log(shoppingCart.getItems())

shoppingCart.removeItem(shoppingCartItemFive)
shoppingCart.removeItem(shoppingCartItemThree)
shoppingCart.removeItem(shoppingCartItemFive)
shoppingCart.removeItem(shoppingCartItemFour)
shoppingCart.removeItem(shoppingCartItemFour)


console.log(".....After supression......")

console.log(shoppingCart.getItems())

*/ 
