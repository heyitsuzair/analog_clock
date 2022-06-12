class getTime {
  // create a function to get the time
  getTime() {
    setInterval(() => {
      this.date = new Date();
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
      this.hourDegree = this.hours * 30 + this.minutes / 2;
      this.minuteDegree = this.minutes * 6;
      this.secondDegree = this.seconds * 6;
      document.getElementById(
        "hour"
      ).style.transform = `rotate(${this.hourDegree}deg)`;
      document.getElementById(
        "minute"
      ).style.transform = `rotate(${this.minuteDegree}deg)`;
      document.getElementById(
        "second"
      ).style.transform = `rotate(${this.secondDegree}deg)`;
    }, 1000);
  }
}
let obj = new getTime();
obj.getTime();
