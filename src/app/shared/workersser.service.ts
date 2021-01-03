import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersserService {
  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) { }

  getWorkers() {
    return this.http.get(this.routeApi);
  };
  delWorkers(id) {
    return this.http.delete(this.routeApi+`/${id}`);
  };
  postWorker(worker){
    return this.http.post(this.routeApi, worker);
  }
  redWorker(RedactWorker){
    return this.http.put(this.routeApi, RedactWorker);
  }
} 
