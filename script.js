// Loader Logic
let counter = document.createElement('div');
counter.id = 'counter';
document.querySelector('.spinner').appendChild(counter);

let count = 0;
let interval = setInterval(() => {
    count++;
    counter.innerText = `${count}%`;

    if (count >= 100) {
        clearInterval(interval);
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';

            // 🟢 Enable scroll after loader
            document.body.style.overflow = 'visible';
        }, 500);
    }
}, 40); // 100 * 40ms = 4 seconds
