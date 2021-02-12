import {Component, Input, OnInit} from '@angular/core';
import {Record} from '../../record';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  // @ts-ignore
  @Input() record: Record;

  constructor() { }

  ngOnInit(): void {
  }

}
