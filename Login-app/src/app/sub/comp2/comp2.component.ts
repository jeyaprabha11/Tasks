import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
 value!:string;
  constructor( private commonService:CommonserviceService) { }

  ngOnInit(): void {
    this.commonService.getPosts().subscribe((data)=>{
      this.value='comp2'+data;
      console.log('comp 2'+data);
    });
  }

}
