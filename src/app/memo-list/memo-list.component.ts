import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMemo} from "../interfaces/IMemo";

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {

  @Input() unfinishedList!: IMemo[];
  @Input() finishedList!: IMemo[];
  @Output() onDelete = new EventEmitter<IMemo>();
  @Output() onStatus = new EventEmitter<IMemo>();
  @Output() onUpdate = new EventEmitter<IMemo>();

  whichList: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  onMemoDelete(memo: IMemo) {
    this.onDelete.emit(memo);
  }
  onStatusChange(memo: IMemo) {
    this.onStatus.emit(memo);
  }
  onMemoUpdate(memo: IMemo){
    this.onUpdate.emit(memo);
  }
}
