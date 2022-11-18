import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
 
 public posts=new BehaviorSubject('initial value');
  

  constructor(private http: HttpClient) { }
  
  SetPost(post:any){
    this.posts.next(post);
  }
  getPosts(){
    return this.posts;
  }

  reuseMethod(){
    return 'data changed';
  }
  getUsers(){
   // return this.http.get<Array<any>>('http://www.mocky.io/v2/5ea172973100002d001eeada');
   //return this.http.get<Array<any>>('https://6369cabe28cd16bba7247496.mockapi.io/login%27');
   return this.http.get<Array<any>>('https://localhost:7156/api/Login');
   
  }
  userLogin(){
    //return this.http.get<Array<any>>('https://6369cabe28cd16bba7247496.mockapi.io/login');
   return this.http.get<Array<any>>('https://localhost:7156/api/Login');



    
  /*userData(data:object){
    return this.http.post("ll",data);
  }*/
}
}
