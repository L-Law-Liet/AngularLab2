import {Component, Input, OnInit} from '@angular/core';
import {Record} from '../../../record';

@Component({
  selector: 'app-results-body',
  templateUrl: './results-body.component.html',
  styleUrls: ['./results-body.component.sass']
})
export class ResultsBodyComponent implements OnInit {
  // @ts-ignore
  @Input() record: Record;
  records = [
    {
      date: '2018-01-01',
      distance: 500000,
      time: 424,
      speed: 0,
    },
    {
      date: '2019-11-13',
      distance: 450000,
      time: 354,
      speed: 0,
    },
    {
      date: '2020-07-21',
      distance: 352000,
      time: 361,
      speed: 0,
    },
    {
      date: '2020-12-11',
      distance: 475210,
      time: 471,
      speed: 0,
    },
  ];
  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-for-of
  }
}
