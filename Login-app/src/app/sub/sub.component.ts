import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sub = new Subject<any>();
    sub.subscribe({
      next: (v) => console.log(`a1: ${v}`),
      complete:()=>console.log('complete')
     
    });
    sub.subscribe({
      next: (v) => console.log(`a2: ${v}`),
     
    });
    sub.subscribe({
      next: (v) => console.log(`a3: ${v}`),
    });
     
    sub.next('a');
    sub.next('b');
    sub.complete();
    sub.next('123');
   
   
  }

}
