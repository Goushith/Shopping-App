import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email=""
pswd=""
uname=""


  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }
  registerForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    uname:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  ngOnInit(): void {
  }

register(){
  console.log(this.registerForm);
  
  // alert('hai') 
  var uname=this.registerForm.value.uname;
  var email=this.registerForm.value.email;
  var pswd=this.registerForm.value.pswd;
  if(this.registerForm.valid){



  const result=this.ds.register(email,uname,pswd)

  // const result=this.ds.register(email,uname,pswd);
  if(result){
    alert('register Successful')
    this.router.navigateByUrl('')
  }else{
    alert('user already registerd')
    this.router.navigateByUrl('register')
  }


}else{
  alert('invalid form')
}
}
}

