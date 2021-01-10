import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id:number;
  prop1: string;
  prop2: string;
  constructor(private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe((param) => {
      this.id = param.id;
      console.log(this.id)
    });
    this.activatedRouter.queryParams.subscribe((param) => {
      this.prop1 = param.prop1;
      this.prop2 = param.prop2;
      console.log(this.prop1, this.prop2);
    });
  }

  ngOnInit(): void {
  }

}
