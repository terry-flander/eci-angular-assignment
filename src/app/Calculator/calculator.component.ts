import { Component } from '@angular/core';

export class Registers {
  displayField: string;
  digitsEntered: number;
  lastTotal: number;
  lastX: number;
  pendingFunction: string;
  lastFunction: string;
}

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

  constructor() {
    this.clearRegisters();
  }

  directCalculate(operand1, operator, operand2) {
    this.clearRegisters();
    var result = '';
    if (isNaN(operand1)) {
      result = 'Invalid Operand: ' + operand1;
    }

    // If this is a valid Unary operator, ready to calculate
    if (result.length==0 && this.unaryFunctions.indexOf(operator)!=-1) {
      this.registers.displayField = operand1;
      this.calculateUnaryMath(operator);
      result = this.registers.displayField;
    }

    // Make sure there are two valid operands
    else {
      if (this.binaryFunctions.indexOf(operator)==-1) {
        result += ' Unrecognized Operator: ' + operator;
      }
      if (isNaN(operand2)) {
        result += ' Invalid Operand: ' + operand2;
      }
      if (result.length==0) {
        this.registers.lastTotal = +operand1;
        this.registers.lastX = +operand1;
        this.registers.displayField = operand2 + '';
        this.registers.pendingFunction = operator;
        this.doBinaryMath('Equals');
        result = this.registers.lastTotal + '';
      }
    }
    return result;
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
    this.clearRegisters();
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
      this.doUnaryMath(event);
    }
    // New function selected; if there is a pending function this will override it
    if (this.registers.pendingFunction!=event && event!='Equals') {
      this.registers.lastX = +this.registers.displayField;
      this.registers.lastTotal = this.registers.lastX;
      this.registers.pendingFunction = event;
      this.registers.lastFunction = '';
      this.registers.digitsEntered = 0;
    } else {
      this.doBinaryMath(event);
    }
  }

  doBinaryMath(event) {
    if (event!='Equals' || this.registers.pendingFunction!='') { 
      this.registers.lastX = +this.registers.displayField;
    } 
    if (event=='Equals' && this.registers.lastFunction!='') { 
      this.registers.pendingFunction = this.registers.lastFunction;
    } 
    this.calculateBinaryMath(this.registers.pendingFunction);
    this.registers.displayField = this.registers.lastTotal + '';
    this.registers.digitsEntered = 0;
    this.registers.lastFunction = this.registers.pendingFunction;
    this.registers.pendingFunction = '';
  }

  doUnaryMath(event) {
    this.calculateUnaryMath(event);
  }

  calculateBinaryMath(pendingFunction) {
    if (pendingFunction=='Add') {
      this.registers.lastTotal = this.registers.lastTotal + this.registers.lastX;
    } else if (pendingFunction=='Subtract') {
      this.registers.lastTotal = this.registers.lastTotal - this.registers.lastX;
    } else if (pendingFunction=='Multiply') {
      this.registers.lastTotal = this.registers.lastTotal * this.registers.lastX;
    } else if (pendingFunction=='Divide') {
      this.registers.lastTotal = this.registers.lastTotal / this.registers.lastX;
    } else if (pendingFunction=='Power') {
      this.registers.lastTotal = Math.pow(this.registers.lastTotal, this.registers.lastX);
    }
  }

  calculateUnaryMath(pendingFunction) {
    if (pendingFunction=='Root') {
      this.registers.displayField = Math.pow(+this.registers.displayField, 1/2) + '';
    }
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
