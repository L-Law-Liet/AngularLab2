import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../data.service';
import {Record} from '../../record';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.sass']
})
export class AddRecordComponent {
  // @Output() recEvent = new EventEmitter();
  record = {
    date: '',
    distance: '',
    time: '',
    speed: 0
};

  // tslint:disable-next-line:variable-name
  constructor(private _data: DataService) { }

  onSubmit(): void {
    if ( this.record.distance && this.record.time && this.record.date ){
      // @ts-ignore
      this.record.speed = Math.round(this.record.distance / this.record.time * 100) / 100;
      const rec = new Record();
      rec.date = this.record.date;
      rec.distance = this.record.distance;
      rec.time = this.record.time;
      rec.speed = this.record.speed;
      this._data.record.next(rec);
      // this.recEvent.emit(this.record);
      this.record.date = '';
      this.record.distance = '';
      this.record.time = '';
      this.record.speed = 0;
    }
  }


}
