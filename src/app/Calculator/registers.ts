// Calculator Registers required to support Display
export class Registers {
  displayField: string;
  digitsEntered: number;
  lastTotal: number;
  lastX: number;
  pendingFunction: string;
  lastFunction: string;
}