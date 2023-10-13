import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  currentValue: string = '0';
  lastOperator: string = '';
  numberOnMemory: number = 0;
  operations: Record<string, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    squared: (a) => a * a,
    sqrt: (a) => Math.sqrt(a),
  };

  onKey(key: string) {
    if ('0123456789'.includes(key)) {
      this.currentValue =
        this.currentValue === '0' ? key : this.currentValue + key;
      return;
    }

    if (',.'.includes(key) && !this.currentValue.includes('.')) {
      this.currentValue += '.';
      return;
    }

    if ('+-*/'.includes(key) || key === 'squared' || key === 'sqrt') {
      if (this.lastOperator) {
        this.executeOperation();
      }
      this.numberOnMemory = parseFloat(this.currentValue);
      this.currentValue = '0';
      this.lastOperator = key;
      return;
    }

    if (key === '=') {
      this.executeOperation();
      this.lastOperator = '';
      this.numberOnMemory = 0;
    }
  }
  clear() {
    this.currentValue = '0';
    this.lastOperator = '';
    this.numberOnMemory = 0;
  }
  deleteLastCharacter() {
    if (this.currentValue.length > 1) {
      this.currentValue = this.currentValue.slice(0, -1);
    } else {
      this.currentValue = '0';
    }
  }
  executeOperation() {
    const operationFunction = this.operations[this.lastOperator];
    if (operationFunction) {
      this.numberOnMemory = operationFunction(
        this.numberOnMemory,
        parseFloat(this.currentValue)
      );
      this.currentValue = this.numberOnMemory.toString();
    }
  }
}
