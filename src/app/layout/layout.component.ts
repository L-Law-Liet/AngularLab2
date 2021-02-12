import { Component, OnInit } from '@angular/core';
import {Record} from '../record';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  // @ts-ignore
  record: Record;
  constructor() { }

  ngOnInit(): void {
  }
  setRecord(record: any): void{
    this.record = record;
  }
}
