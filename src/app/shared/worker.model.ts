export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  patr:string;
  email:string;
  bd: string;
  type: number;
  phone: string;
}

export enum MyWorkerType {
  programmer,
  sale,
  del,
  law,
}

export let MyWorkersDatabase: MyWorker[] = [

];
