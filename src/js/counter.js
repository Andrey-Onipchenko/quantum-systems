export default class Counter {
  constructor(selector, max, min, interval) {
    this.counter = document.querySelector(selector);
    this.count = this.counter.querySelector('[data-counter="counter-num"]');
    this.max = max;
    this.min = min;
    this.interval = interval;
    this.init();
  }
  init() {
    this.count.textContent = this.max;
    let i = 1;
    setInterval(() => {
      const value = this.count.textContent;
      i++;
      let res = false;
      if (i % 2 === 0) {
        res = true;
      }
      console.log(i);
      if (res) {
        this.count.textContent =
          +value + Math.floor(Math.random() * this.min + 1);
      } else {
        this.count.textContent =
          +value - Math.floor(Math.random() * this.min + 1);
      }
    }, this.interval);
  }
}
