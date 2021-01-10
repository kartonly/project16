import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  public mask =[/\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  myForm : FormGroup = new FormGroup({
             
    "name": new FormControl("", Validators.required),
    "surname": new FormControl("", [
                Validators.required, 
    ]),
    "patr": new FormControl("", [
      Validators.required, 
]),
    "email": new FormControl("", Validators.required),
    "bd": new FormControl("", Validators.required),
    "type": new FormControl(0, Validators.required),
    "phone": new FormControl("", Validators.pattern("[0-9]{10}")) 
});

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}
  onAddWorker() {
    this.addWorker.emit({
      name: this.myForm.controls["name"].value,
      surname: this.myForm.controls["surname"].value,
      type: this.myForm.controls["type"].value,
      patr: this.myForm.controls["patr"].value,
      bd: this.myForm.controls["bd"].value,
      email: this.myForm.controls["email"].value,
      phone: this.myForm.controls["phone"].value });
  }
}
