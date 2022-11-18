import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  getUser !: Array<any>;

  constructor(private commonService:CommonserviceService) { }
  ngOnInit(): void {
    this.commonService.getUsers().subscribe((response)=>{
      console.log(response);
      this.getUser=response;
    })
  }

   }



  


