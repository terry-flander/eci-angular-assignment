import { Component } from '@angular/core';
import { Registers } from './registers';
import { MathService } from '../services/math.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  title = 'Actual Calculator';
  registers: Registers;
  unaryFunctions = 'Root';
  binaryFunctions = 'Add,Subtract,Multiply,Divide,Power';
  showHide = false;

  constructor(private mathService: MathService) {
    this.clearRegisters();
  }

  digitPress(event) {
    if (this.registers==undefined) {
      this.clearRegisters();
    } 
    if (this.allowDigit(event)) {
      if (this.registers.digitsEntered==0) {
        this.registers.displayField = '';
      }
      this.registers.displayField += event;
      this.registers.digitsEntered += 1;
    }
  }

  clearPress(event) {
    // Clear Display first time
    if (this.registers.digitsEntered!=0) {
      this.registers.digitsEntered = 0;
      this.registers.displayField = '0';
    } else {
      this.clearRegisters();
    }
  }

  clearRegisters() {
    if (this.registers==undefined) {
      this.registers = new Registers();
    } 
    this.registers.displayField = '0';
    this.registers.digitsEntered = 0;
    this.registers.lastTotal = 0;
    this.registers.pendingFunction = '';
    this.registers.lastX = 0;
    this.registers.lastFunction = '';
  }

  allCleared() {
    var result = 
      this.registers.displayField=='0' &&
      this.registers.digitsEntered==0 &&
      this.registers.lastTotal==0 &&
      this.registers.pendingFunction=='' &&
      this.registers.lastX==0 &&
      this.registers.lastFunction=='';
    return result;
  }

  toggleShowHide() {
    this.showHide = !this.showHide;
  }

  functionPress(event) {
    if (this.unaryFunctions.indexOf(event)!=-1) {
      this.registers.displayField = this.mathService.calculateEquals(+this.registers.displayField, event, 0) + '';
    }
    // New function selected; if there is a pending function this will override it
    if (this.registers.pendingFunction!=event && event!='Equals') {
      this.registers.lastX = +this.registers.displayField;
      this.registers.lastTotal = this.registers.lastX;
      this.registers.pendingFunction = event;
      this.registers.lastFunction = '';
      this.registers.digitsEntered = 0;
    } else {
      this.calculateEquals(event);
    }
  }

  calculateEquals(event) {
    if (event!='Equals' || this.registers.pendingFunction!='') { 
      this.registers.lastX = +this.registers.displayField;
    } 
    if (event=='Equals' && this.registers.lastFunction!='') { 
      this.registers.pendingFunction = this.registers.lastFunction;
    } 
    this.registers.lastTotal = this.mathService.calculateEquals(this.registers.lastTotal, this.registers.pendingFunction, this.registers.lastX);
    this.registers.displayField = this.registers.lastTotal + '';
    this.registers.digitsEntered = 0;
    this.registers.lastFunction = this.registers.pendingFunction;
    this.registers.pendingFunction = '';
  }

  allowDigit(event) {
    var result = true;
    if (this.registers.digitsEntered >= 12) {
      result = false;
    } 
    if (result && event=='.' && this.registers.displayField.indexOf('.')!=-1) {
      result = false;
    }
    if (result && event=='0' && this.registers.digitsEntered==0) {
      result = false;
    }
    return result;
  }

}
