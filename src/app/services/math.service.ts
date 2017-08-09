import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
  functionList = 'Add,Subtract,Multiply,Divide,Power,Root';

  calculateEquals(operand1, operator, operand2) {
    var result = 0;
    var errorMsg = '';
    try {
      if (isNaN(operand1)) {
        errorMsg = this.addError(errorMsg,'Invalid Operand: ' + operand1);
      }
      if (this.functionList.indexOf(operator)==-1) {
        errorMsg = this.addError(errorMsg,'Unrecognized Operator: ' + operator);
      }
      if (isNaN(operand2)) {
        errorMsg = this.addError(errorMsg,'Invalid Operand: ' + operand2);
      }
        
      if (errorMsg.length!=0) {
         throw new Error(errorMsg);
      }
      if (operator=='Add') {
        result = +operand1 + +operand2;
      } else if (operator=='Subtract') {
        result = operand1 - operand2;
      } else if (operator=='Multiply') {
        result = operand1 * operand2;
      } else if (operator=='Divide') {
        result = operand1  / operand2;
      } else if (operator=='Power') {
        result = Math.pow(operand1, operand2);
      } else if (operator=='Root') {
        result = Math.pow(+operand1, 1/2);
      }
    } catch (e) {
        throw e;
    }
    return result;
  }

  addError(errorMsg, errorToAdd) {
    var result = errorMsg;
    if (result==undefined) {
      result = '';
    }
    result += (result.length>0?',':'') + errorToAdd;
    return result;
  }

}