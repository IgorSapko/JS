class CountdownTimer {
  constructor(obj) {
    (this.selector = obj.selector), (this.targetDate = obj.targetDate);
  }
}

const myTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Sep 17, 2020"),
});

const daysShown = document.querySelector('[data-value="days"]');
const hoursShown = document.querySelector('[data-value="hours"]');
const minsShown = document.querySelector('[data-value="mins"]');
const secsShown = document.querySelector('[data-value="secs"]');

const fuctionUpdateTimer = setInterval(() => {
  const time = Date.parse(myTimer.targetDate) - Date.parse(new Date());

  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  daysShown.textContent = days;
  hoursShown.textContent = hours;
  minsShown.textContent = mins;
  secsShown.textContent = secs;
}, 1000);
