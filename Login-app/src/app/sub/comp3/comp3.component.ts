import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
value!:string;
  constructor( private commonService:CommonserviceService) { }

  ngOnInit(): void {
    this.commonService.getPosts().subscribe((data)=>{
      this.value='comp3'+data;
      console.log('comp 3'+data);
    });
  }

}
