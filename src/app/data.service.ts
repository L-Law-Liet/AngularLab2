import { Injectable } from '@angular/core';
import {Record} from './record';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // @ts-ignore
  record: Subject<Record> = new Subject<Record>();
  constructor() { }
}
