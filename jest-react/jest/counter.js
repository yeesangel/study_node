export class Counter {
  constructor() {
    this.count = 0;
  }

  onAdd() {
    this.count += 1;
  }

  onMinus() {
    this.count -= 1;
  }

  onAddTwo() {
    this.count += 2;
  }

  onMinusTwo() {
    this.count -= 2;
  }

}