import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main.component';
import { Main2Component } from './main2/main2.component';
import { AppComponent } from './app.component';
import { AddformWorkerComponent } from 'src/app/ui/addform-worker/addform-worker.component';

const routes: Routes = [
  {
    path: '',
    component: Main2Component,
  },
  {
    path: 'test',
    component: TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
