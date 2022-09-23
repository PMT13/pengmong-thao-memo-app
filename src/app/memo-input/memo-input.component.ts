import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-memo-input',
  templateUrl: './memo-input.component.html',
  styleUrls: ['./memo-input.component.css']
})
export class MemoInputComponent implements OnInit {

  @Output() onSave = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(input: string): void {
    this.onSave.emit(input);
  }

}
