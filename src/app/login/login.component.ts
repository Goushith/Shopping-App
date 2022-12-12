import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }
email="";
pswd="";


loginForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

// database


  ngOnInit(): void {
  }

    emailChange(event:any){
      console.log(event)
      this.email=event.target.value
      console.log(this.email);
      
    }

    pswdChange(event:any){
      this.pswd=event.target.value
      console.log(this.pswd);
      
    }

  login(){

    var email=this.loginForm.value.email;
    var pswd=this.loginForm.value.pswd;
    var userDetails=this.ds.userDetails;
    if(this.loginForm.valid){

    const result=this.ds.login(email,pswd)
    if(result){
      // if(pswd == userDetails[email]["password"]){
        alert('login successful')
        this.router.navigateByUrl('header')
      }else{
        alert('login Failed')
      }
    }else{
      alert('invalid Form')
    }
  }
  
  }
  //   }else{
  //     alert('invalid userdetails')
  //   }
  // }

