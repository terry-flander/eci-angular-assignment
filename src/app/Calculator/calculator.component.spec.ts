import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
      ],
    }).compileComponents();
  }));

  it('should create the Calculator', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Actual Calculator'`, async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Actual Calculator');
  }));

  it(`should direct Add: 1 + 2 = 3'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.directCalculate('1','Add','2')).toEqual('3');
  }));

  it(`should direct Subtract: 3 - 1 = 2'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.directCalculate('3','Subtract','1')).toEqual('2');
  }));

  it(`should direct Multiply: 3 * 2 = 6'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.directCalculate('3','Multiply','2')).toEqual('6');
  }));

  it(`should direct Divide: 12 / 3 = 4'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.directCalculate('12','Divide','3')).toEqual('4');
  }));

  it(`should direct Square Root: squareRoot(9) = 3'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.directCalculate('9','Root')).toEqual('3');
  }));

  it(`should direct Raise to Power X^N: 2 ^ 3 = 8'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.directCalculate('2','Power','3')).toEqual('8');
  }));

  it(`should allow a digit to be entered'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    expect(app.allowDigit("1")).toBeTruthy();
  }));

  it(`should allow a maximum of 12 digits to be entered'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.registers.digitsEntered = 12;
    expect(app.allowDigit("1")).toBeFalsy();
  }));

  it(`should allow a Clear Key to reset registers'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.digitPress('1');
    app.functionPress('Add');
    app.digitPress('1');
    app.functionPress('Equals');
    app.clearPress();
    expect(app.allCleared()).toBeTruthy();
  }));

  it(`should keyboard Add: 1 + 2 = 3'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.digitPress('1');
    app.functionPress('Add');
    app.digitPress('2');
    app.functionPress('Equals');
    expect(app.registers.lastTotal).toEqual(3);
  }));

  it(`should keyboard Subtract: 3 - 1 = 2'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.digitPress('3');
    app.functionPress('Subtract');
    app.digitPress('1');
    app.functionPress('Equals');
    expect(app.registers.lastTotal).toEqual(2);
  }));

  it(`should keyboard Multiply: 3 * 3 = 9'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.digitPress('3');
    app.functionPress('Multiply');
    app.digitPress('3');
    app.functionPress('Equals');
    expect(app.registers.lastTotal).toEqual(9);
  }));

  it(`should keyboard Divide: 33 / 3 = 11'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.digitPress('33');
    app.functionPress('Divide');
    app.digitPress('3');
    app.functionPress('Equals');
    expect(app.registers.lastTotal).toEqual(11);
  }));

  it(`should keyboard Square Root: squareRoot(9) = 3'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.digitPress('9');
    app.functionPress('Root');
    expect(app.registers.lastTotal).toEqual(3);
  }));

  it(`should keyboard Raise to Power X^N: 2 ^ 3 = 8'`, async(() => { 
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;
    app.clearRegisters();
    app.digitPress('2');
    app.functionPress('Power');
    app.digitPress('3');
    app.functionPress('Equals');
    expect(app.registers.lastTotal).toEqual(8);
  }));

});
