import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { DataService } from '../Services/data.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent implements OnInit {
   public productList : any;
   searchKey:string=""
  constructor(private data:DataService,private cartService:CartService) { }

  ngOnInit(): void {
    this.data.getProduct()
    .subscribe(res=>{
      this.productList=res;
      
      this.productList.forEach((a:any)=> {
        if(a.category==="women's clothing " || a.category==="men's clothing"){
          a.category="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price })
        
      });
      console.log(this.productList);
      
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

addtocart(item:any){
this.cartService.addtoCart(item);
} 
}
