import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  title = "login";
  //value!:object
  todaydate = Date();
  LoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
  });
  LoginDetails!: User;
  constructor(private fb: FormBuilder, private commonService: CommonserviceService,
    private router: Router) { }

  ngOnInit(): void {
    const servicevalue = this.commonService.reuseMethod();
    console.log(servicevalue);
   this.commonService.userLogin().subscribe(response => {
      this.LoginDetails = response;
       console.log(response)
    });


    //this.value = JSON.parse(localStorage.getItem("name") || "")
   // console.log(this.value)


  }
  LoginFun() {
    // localStorage.removeItem("name")
    console.log(this.LoginForm);
    this.LoginForm.markAllAsTouched();
    /*this.LoginForm.patchValue({
     email :'jp@gamil.com',
     password :'prabha',
    });*/
   this.LoginForm.value;
    this.LoginDetails;

    if (this.LoginForm.valid) {
      if (
        this.LoginDetails[0]?.email === this.LoginForm.get('email')?.value && this.LoginDetails[0]?.password === this.LoginForm.get('password')?.value
      ) {
        
        //this.commonService.userData({name:this.LoginForm.get('email')?.value,pass:this.LoginForm.get('password')?.value}).subscribe(response => {
        //});
         this.router.navigateByUrl('/dashboard');
      }
      else {
        alert('Invalid data');
      }
    }

  }


  ngOnDestroy(): void {
    localStorage.removeItem("name")
  }

}
