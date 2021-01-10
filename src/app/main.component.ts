import { Component, OnInit, Input } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';
import { WorkersserService } from './shared/workersser.service';
import { RedactComponent } from './ui/redact/redact.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[]=[];
  myWorkerType = MyWorkerType;
  @Input() searchworker: string;
  constructor(private WorkersserService: WorkersserService){}
  ngOnInit() {
 
  }
  
 
}