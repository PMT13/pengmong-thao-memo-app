import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(num1: number, operation: string, num2: number): void {
    if (isNaN(num1) || isNaN(num2)) {
      this.result = 0;
      return;
    }

    switch (operation) {
      case "+":
        this.result = num1 + num2;
        break;
      case "-":
        this.result = num1 - num2;
        break;
      case "*":
        this.result = num1 * num2;
        break;
      case "/":
        this.result = num1 / num2;
        break;
      default:
        console.error('unknown operation!');
        return;
    }
  }

}
