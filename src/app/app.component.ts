import {Component} from '@angular/core';
import {IMemo} from "./interfaces/IMemo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  memoList: IMemo[] = [];
  finishedList: IMemo[] = [];
  unfinishedList: IMemo[] = [];

  createMemo(input: string) {
    const currentDate = new Date();
    const memo: IMemo = {id: currentDate.getTime(), text: input, date: currentDate, finished: false}
    this.memoList.push(memo);
    this.unfinishedList.push(memo);
  }

  deleteMemo(memoToDelete: IMemo) {
    this.memoList = this.memoList.filter(memo => memo.id !== memoToDelete.id);
    if(memoToDelete.finished === false){
      this.unfinishedList = this.unfinishedList.filter(memo => memo.id !== memoToDelete.id);
    }else{
      this.finishedList = this.finishedList.filter(memo => memo.id !== memoToDelete.id);
    }
  }

  changeStatus(memoToChange:IMemo){
    if(memoToChange.finished === false){
      this.finishedList = this.finishedList.filter(memo => memo.id !== memoToChange.id);
      this.unfinishedList.push(memoToChange);
    }else{
      this.unfinishedList = this.unfinishedList.filter(memo => memo.id !== memoToChange.id);
      this.finishedList.push(memoToChange);
    }
  }
  updateMemo(memoToUpdate:IMemo){
    if (memoToUpdate.text.length === 0) {
      return
    }
    const memoIndex = this.memoList.findIndex(memo => memo.id === memoToUpdate.id);
    if (memoIndex > -1) {
      this.memoList[memoIndex] = memoToUpdate;
    }
    if(memoToUpdate.finished === true){
      this.finishedList = this.finishedList.filter(memo => memo.id !== this.memoList[memoIndex].id);
      this.finishedList.push(memoToUpdate);
    }else{
      this.unfinishedList = this.unfinishedList.filter(memo => memo.id !== this.memoList[memoIndex].id);
      this.unfinishedList.push(memoToUpdate);
    }
  }
  debug() {
    console.log(this.memoList);
  }

}
