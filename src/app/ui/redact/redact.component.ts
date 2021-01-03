import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.css']
})
export class RedactComponent implements OnInit {
  myWorkerType = MyWorkerType;
  public mask1 =[/\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  myForm1 : FormGroup = new FormGroup({
    "idnew": new FormControl("", Validators.required),
    "namenew": new FormControl("", Validators.required),
    "surnamenew": new FormControl("", [
                Validators.required, 
    ]),
    "type": new FormControl(0, Validators.required),
    "phonenew": new FormControl("", Validators.pattern("[0-9]{10}")) 
});

  @Output() RedactWorker = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {}
  
  onRedactWorker() {
    this.RedactWorker.emit({
      id: this.myForm1.controls["idnew"].value,
      name: this.myForm1.controls["namenew"].value,
      surname: this.myForm1.controls["surnamenew"].value,
      type: this.myForm1.controls["type"].value,
      phone: this.myForm1.controls["phonenew"].value });
  }
}
