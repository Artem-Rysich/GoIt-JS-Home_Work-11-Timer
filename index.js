'use strict';
class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = selector), (this.targetDate = targetDate);
  }
  startTimer() {
    setInterval(timer => {
      const timeToday = new Date();
      const time = this.targetDate - timeToday;
      const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
        3,
        '0',
      );
      const hours = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      const mins = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(
        2,
        '0',
      );
      this.selector = document.querySelector(
        '[data-value="days"]',
      ).textContent = days;
      this.selector = document.querySelector(
        '[data-value="hours"]',
      ).textContent = hours;
      this.selector = document.querySelector(
        '[data-value="mins"]',
      ).textContent = mins;
      this.selector = document.querySelector(
        '[data-value="secs"]',
      ).textContent = secs;
    }, 1000);
  }
}
const NewYearTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('December 31, 2020'),
});
NewYearTimer.startTimer();
