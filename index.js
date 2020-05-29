'use strict';
class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;

  }
  startTimer () {
    const expectedDate = this.targetDate.getTime ();
    const day = document.querySelector(`${this.selector} [data-value="days"]`);
    const hour =  document.querySelector(`${this.selector} [data-value="hours"]`);
    const min = document.querySelector(`${this.selector} [data-value="mins"]`);
    const sec = document.querySelector(`${this.selector} [data-value="secs"]`);
    setInterval(() => {
      const currentDate = new Date ().getTime ();
      const interval = expectedDate - currentDate;
      const days = String(Math.floor(interval / (1000 * 60 * 60 * 24))).padStart(3, '0');
      const hours = String(Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((interval % (1000 * 60)) / 1000)).padStart(2, '0');
      day.textContent = days;
      hour.textContent = hours;
      min.textContent = mins;
      sec.textContent = secs;
    }, 1000);
  }
}
const NewYearTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('December 31, 2020'),
});
NewYearTimer.startTimer();

