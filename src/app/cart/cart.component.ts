import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : any = [];
  grandTotal !: number;

  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();

    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

emptyCart(){
  this.cartService.removeAllCart();
}

}
