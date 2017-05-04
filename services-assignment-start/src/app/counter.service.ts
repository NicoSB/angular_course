export class CounterService {
  counter: number = 0;
  increaseCounter() {
    console.log(++(this.counter));
  }
}
