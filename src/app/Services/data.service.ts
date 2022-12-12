import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUserDetails=""
  currentEmailDetails=""

  constructor(private http:HttpClient) {
    this.getallDetails()
   }




   getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
   }
saveShopping(){
  if(this.userDetails){
  localStorage.setItem('Database',JSON.stringify(this.userDetails));
  }
  if(this.currentUserDetails){
  localStorage.setItem('currentUserDetails',JSON.stringify(this.currentUserDetails));
  }
  if(this.currentEmailDetails){
  localStorage.setItem('currentEmailDetails',JSON.stringify(this.currentEmailDetails));
  }
}



getallDetails(){
  if(localStorage.getItem('Database')){
    this.userDetails=JSON.parse(localStorage.getItem('Database')|| '')
  }
  
  if(localStorage.getItem('currentUserDetails')){
    this.currentUserDetails=JSON.parse(localStorage.getItem('currentUserDetails')|| '')
  }
  
  if(localStorage.getItem('currentEmailDetails')){
    this.currentEmailDetails=JSON.parse(localStorage.getItem('currentEmailDetails')|| '')
  }
  
  }



  userDetails:any={
    "gcm0006@gmail.com":{email:"gcm0006@gmail.com",username:"Goushith",password:1000},
    "rafnas@gmail.com":{email:"rafnas@gmail.com",username:"Rafnas",password:1001},
    "anujith@gmail.com":{email:"anujith@gmail.com",username:"Anujith",password:1002},
  
  }
    register(email:any,username:any,password:any){
      let userDetails=this.userDetails;

      if(email in userDetails){
        return false
      }else{
        userDetails[email]={
          email,
          username,
          password,

        }
        this.saveShopping()
        console.log(userDetails);
        return true
        
      }
    }

    login(email:any,pswd:any){
      let userDetails=this.userDetails;
      if(email in userDetails){
        if(pswd==userDetails[email]['password']){
          this.currentUserDetails=userDetails[email]['username']
          this.currentEmailDetails=email
          this.saveShopping()
          return true
        }else{
          return false
        }
      }else{
        return false
      }
    }
}
