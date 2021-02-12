import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import {Record} from '../../record';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit{
  // @ts-ignore
  @Input() record: Observable<Record>;
  // tslint:disable-next-line:variable-name
  constructor() { }
  ngOnInit(): void {
    this.record.subscribe(data => {
      console.log(data);
    });
  }
}
