let NextYear = new Date().getFullYear() + 1;

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

const id = id => document.getElementById(id);

id('new-year').innerText = NextYear;

function CountDown() {
    let NewYear = new Date(`Jan 1 ${NextYear} 00:00:00`).getTime();
    let now = new Date().getTime();
    let gap = NewYear - now;

    let d = Math.floor(gap / day);
    let h = Math.floor(gap % day / hour);
    let m = Math.floor(gap % hour / minute);
    let s = Math.floor(gap % minute / second);

    id('day').innerText = d;
    id('hour').innerText = h;
    id('minute').innerText = m;
    id('second').innerText = s;

    if ((d == 0) && (h == 0) && (m == 0) && (s == 0)) {
        document.getElementsByTagName('h1')[0].style.display = 'block';
        document.getElementsByTagName('h1')[0].innerHTML = `Happy <span id='new-year'>${NextYear}</span>!`;
        clearInterval(timer);
    }
}

let timer = setInterval(CountDown, 1000);