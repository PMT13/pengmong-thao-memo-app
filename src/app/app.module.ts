import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {MemoInputComponent} from './memo-input/memo-input.component';
import {MemoListComponent} from './memo-list/memo-list.component';
import {MemoComponent} from './memo/memo.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CalculatorComponent,
    MemoInputComponent,
    MemoListComponent,
    MemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
