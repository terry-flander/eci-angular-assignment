//
import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CalculatorComponent } from './calculator.component';
import { MathService } from '../services/math.service';
import {} from 'jasmine';

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
      providers: [
        MathService
      ]
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
