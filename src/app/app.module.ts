import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedactComponent } from './ui/redact/redact.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { Main2Component } from './main2/main2.component';
import { BdPipe } from './shared/pipes/bd.pipe';
import { IdPipe } from './shared/pipes/id.pipe';

@NgModule({
  declarations: [ AppComponent, TableWorkersComponent, AddformWorkerComponent, RedactComponent, MyfilterPipe, Main2Component, BdPipe, IdPipe],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
