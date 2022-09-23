import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMemo} from "../interfaces/IMemo";

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  @Input() memo!: IMemo;
  @Output() onDelete = new EventEmitter<IMemo>();
  @Output() onStatus = new EventEmitter<IMemo>();
  @Output() onUpdate = new EventEmitter<IMemo>();
  isUpdating: boolean = false;
  memoCopy! : IMemo;

  constructor() { }

  ngOnInit(): void {
    this.memoCopy = {...this.memo};
  }

  onDeleteClick() {
    this.onDelete.emit(this.memo);
  }

  onUpdateClick() {
    this.isUpdating = true;
  }

  onSaveClick() {
    this.isUpdating = false;
    this.onUpdate.emit(this.memoCopy);
  }

  onCancelClick(){
    this.memoCopy = {...this.memo}; // {...this.memo} is making a copy of the memo
    this.isUpdating = false;
  }
  onStatusChange(){
    this.onStatus.emit(this.memo);
  }
}
