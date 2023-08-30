const time = 1100;
const step = 1;

function outNum(num, elem) {
    let i = document.querySelector("#"+elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n=(n+step);
        if (n == num) {
            clearInterval(interval);
        }
        i.innerHTML = n;
    },
        t)
}

outNum(10, "out-1");