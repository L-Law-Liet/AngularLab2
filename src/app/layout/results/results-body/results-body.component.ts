import {Component, Input, OnInit} from '@angular/core';
import {Record} from '../../../record';
import {DataService} from '../../../data.service';

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
      distance: '500000',
      time: '424',
      speed: 453,
    },
    {
      date: '2019-11-13',
      distance: '450000',
      time: '354',
      speed: 63,
    },
    {
      date: '2020-07-21',
      distance: '352000',
      time: '361',
      speed: 174,
    },
    {
      date: '2020-12-11',
      distance: '475210',
      time: '471',
      speed: 168,
    },
  ];
  // tslint:disable-next-line:variable-name
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.record.subscribe(res => {
      this.records.push(res);
    });
  }
}
