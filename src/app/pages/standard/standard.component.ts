import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-standard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss'],
})
export class StandardComponent {
  constructor(public calculatorService: CalculatorService) {}

  onKey(key: string) {
    this.calculatorService.onKey(key);
  }
  clear() {
    this.calculatorService.clear();
  }
  deleteLastCharacter() {
    this.calculatorService.deleteLastCharacter();
  }
  executeOperation() {
    this.calculatorService.executeOperation();
  }
}
