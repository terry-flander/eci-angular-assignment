//
import { TestBed, getTestBed, async } from '@angular/core/testing';

import { MathService } from './math.service';
import {} from 'jasmine';

describe('MathService', () => {
  let service: MathService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MathService
      ]
    }).compileComponents();
  }));

  it('should create the MathService', async(() => {
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(service).toBeTruthy();
  }));

  it(`should throw error if bad Operand 1'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(function() {service.calculateEquals('fred','Add',2);} ).toThrow(new Error('Invalid Operand: fred'));
  }));

  it(`should throw error if bad Operand 2'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(function() {service.calculateEquals(1,'Add','bob');} ).toThrow(new Error('Invalid Operand: bob'));
  }));

  it(`should throw error if unrecognized Operator'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(function() {service.calculateEquals(1,'Scramble',1);} ).toThrow(new Error('Unrecognized Operator: Scramble'));
  }));

  it(`should throw error if combination of errors'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(function() {service.calculateEquals('green','Scramble','eggs');} )
    .toThrow(new Error('Invalid Operand: green,Unrecognized Operator: Scramble,Invalid Operand: eggs'));
  }));

  it(`should direct Add: 1 + 2 = 3'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(service.calculateEquals(1,'Add',2)).toEqual(3);
  }));

  it(`should direct Subtract: 3 - 1 = 2'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(service.calculateEquals(3,'Subtract',1)).toEqual(2);
  }));

  it(`should direct Multiply: 3 * 2 = 6'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(service.calculateEquals(3,'Multiply',2)).toEqual(6);
  }));

  it(`should direct Divide: 12 / 3 = 4'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(service.calculateEquals(12,'Divide',3)).toEqual(4);
  }));

  it(`should direct Square Root: squareRoot(9) = 3'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(service.calculateEquals(9,'Root', 0)).toEqual(3);
  }));

  it(`should direct Raise to Power X^N: 2 ^ 3 = 8'`, async(() => { 
    const fixture = getTestBed();
    service = fixture.get(MathService);
    expect(service.calculateEquals(2,'Power',3)).toEqual(8);
  }));


});
