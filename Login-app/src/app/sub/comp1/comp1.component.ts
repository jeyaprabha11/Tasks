import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private  commonService:CommonserviceService) { }

  ngOnInit(): void {
  }
  onButtonClick(){
    this.commonService.SetPost('data from comp1');
  }

}
