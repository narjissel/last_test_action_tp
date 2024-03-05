export class Product {
  
    quantity: number; 
    private _productTitle!: String;
    public get productTitle(): String {
        return this._productTitle;
    }
    public set productTitle(value: String) {
        this._productTitle = value;
    }
    private _prouctPrice!: String;
    public get prouctPrice(): String {
        return this._prouctPrice;
    }
    public set prouctPrice(value: String) {
        this._prouctPrice = value;
    }
    private _productImage: string = "";
    public get productImage(): string {
      return this._productImage;
    }
    public set productImage(value: string) {
      this._productImage = value;
    }

    constructor(readonly productID: String ,  quantity: number){
        this.quantity = quantity;

    }

    
    public printProduct(): String{
        return "productID:" +this.productID +", productTitle: "+this.productTitle + ", prouctPrice: " + this.prouctPrice
    }
}

/*
let product = new Product("REFAZER")
product.productTitle = "Tablette SAM 12 Pouce"
product.prouctPrice = "2334 DH"


console.log(product.printProduct())
*/