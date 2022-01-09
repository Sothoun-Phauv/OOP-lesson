import { Material } from "./Material";

export class UsbKey extends Material {
  private capacity: number;

  constructor(id: number, capacity: number) {
    super(id);
    this.capacity = capacity;
  }
}
