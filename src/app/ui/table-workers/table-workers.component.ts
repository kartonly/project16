import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[]=[];
  @Input() searchworker: string;

  @Output() deleteWorker = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  direction=0;
  sorting= 'id';
  reverseSortID(){
    this.sorting = 'id';
    if(this.direction) {this.direction = 0;}
    else this.direction = 1;
  }
  reverseSortBirthday(){
    this.sorting = 'bd';
    if(this.direction) {this.direction = 0}
      else this.direction = 1;
  }
  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }  
}
