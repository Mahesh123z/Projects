function updateClock() {
    const hourElem = document.getElementById('hour');
    const minuteElem = document.getElementById('minute');
    const secondElem = document.getElementById('second');
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondDegree = 6 * seconds;
    const minuteDegree = 6 * minutes ;
    const hourDegree = 30 * hours + (minutes / 2);

    secondElem.style.transform = `rotate(${secondDegree}deg)`;
    minuteElem.style.transform = `rotate(${minuteDegree}deg)`;
    hourElem.style.transform = `rotate(${hourDegree}deg)`;
}

// updateClock();
setInterval(updateClock, 1000);