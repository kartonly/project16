import { Component, OnInit, Input } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from 'src/app/shared/worker.model';
import { WorkersserService } from 'src/app/shared/workersser.service';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[]=[];
  myWorkerType = MyWorkerType;
  @Input() searchworker: string;
  constructor(private WorkersserService: WorkersserService){}
  ngOnInit() {
    this.getData();
  }
  async getData() {
    try {
      this.WorkersserService.getWorkers().subscribe((data:MyWorker[]) => this.workers=data);
    } catch (err) {
      console.log(err);
    }
  }
  getByType(type: number) {
    return Object.values(this.workers).filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    let index1:string = String(this.workers[index].id);
    if (index !== -1) {
      this.WorkersserService.delWorkers(index1).subscribe(()=>this.getData(), (err) => console.log(err));
    }
  }

  onDeleteByIdR(deleteWorker) {
    let index = this.workers.findIndex((worker) => worker.id === deleteWorker.id);
    let index1:string = String(this.workers[index].id);
    if (index !== -1) {
      this.WorkersserService.delWorkers(index1).subscribe(()=>this.getData(), (err) => console.log(err));
    }
  }

  onAddWorker(worker) {
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    this.workers.push(worker);
    this.WorkersserService.postWorker(worker).subscribe(()=>this.getData(), (err) => console.log(err));
  }

  onRedactWorker(RedactWorker){
    let index = this.workers.findIndex((worker) => worker.id === RedactWorker.id);
    if (index !== -1) {
      this.workers.splice(index, 1, RedactWorker);
      this.WorkersserService.redWorker(RedactWorker).subscribe(()=>this.getData(), (err) => console.log(err));
    }
  }
}
