let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

function clock() {
    let date = new Date();
    second.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
    minute.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
    hour.style.transform = `rotate(${(date.getHours() * 30) + (date.getMinutes() * 0.5)}deg)`;
}
let index=setInterval(clock, 1000);