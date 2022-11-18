import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { UppercasePipe } from './uppercase.pipe';
import { FocusformelementsDirective } from './focusformelements.directive';
import { MultiplyPipe } from './multiply.pipe';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubComponent } from './sub/sub.component';
import { Comp1Component } from './sub/comp1/comp1.component';
import { Comp2Component } from './sub/comp2/comp2.component';
import { Comp3Component } from './sub/comp3/comp3.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { AdmininfoComponent } from './admininfo/admininfo.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
   
    NotfoundComponent,
    
       UppercasePipe,
            FocusformelementsDirective,
            MultiplyPipe,
            UserComponent,
           
            SubComponent,
                        Comp1Component,
                        Comp2Component,
                        Comp3Component,
                        DashboardComponent,
                        LogoutComponent,
                        AdmininfoComponent,
                     
           
           
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
