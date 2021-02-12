import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.sass']
})
export class AddRecordComponent {
  @Output() recEvent = new EventEmitter();
  record = {
    date: '',
    distance: '',
    time: '',
    speed: 0
};

  constructor() { }

  onSubmit(): void {
    this.record.date = '';
    this.record.distance = '';
    this.record.time = '';
    // @ts-ignore
    this.record.speed = Math.round(this.record.distance / this.record.time * 100) / 100;
    this.recEvent.emit(this.record);
  }


}
