import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   title="register";
   user={
    name:"jeya",
    phone:"987654321",
 
   }
 
    fontSize: number = 15;  
     
  
    incss() {  
        let styles = {  
            
            'font-size.px': this.fontSize  
        };  
  
        return styles; 
      }
     

   
   

  RegisterForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3)]],
    phone:['',[Validators.required,Validators.maxLength(5)]],
  });

  constructor(private fb: FormBuilder,private commonService:CommonserviceService) { }
  obj={name:"ak",num:11}
  ngOnInit(): void {
   console.log(this.commonService.reuseMethod())
   localStorage.setItem("name",JSON.stringify(this.obj))
  }
 
 RegFun(){
  console.log(this.RegisterForm);
  this.RegisterForm.markAllAsTouched();
 }

}

