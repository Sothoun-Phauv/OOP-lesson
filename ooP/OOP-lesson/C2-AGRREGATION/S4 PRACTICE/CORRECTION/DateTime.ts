export class DateTime {
  date: string; // mandatory
  time: string; // mandatory

  constructor(date: string, time: string) {
    this.date = date;
    this.time = time;
  }
}
