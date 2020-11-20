let doFirst = function () {
    let time = dayjs();
    let timeChange = function () {
        timeString = time.format('[GMT]Z YYYY-MM-DD HH:mm:ss');
        document.getElementById('time_show').innerText = timeString;
    };
    timeChange();

    let timeCount = setInterval(() => {
        time = new dayjs();
        timeChange();
    }, 1000);

}
let openList = function (e) {
    document.getElementById('choose_lang').classList.add('list-open');
}

let changeLang = function (e) {
    e.stopPropagation();
    document.getElementById('choose_lang').classList.remove('list-open');
    document.getElementById('lang').innerText = e.currentTarget.innerText;
};

window.addEventListener('load', doFirst);
document.getElementById('choose_lang').addEventListener('click', openList);
document.getElementById('lang1').addEventListener('click', changeLang);
document.getElementById('lang2').addEventListener('click', changeLang);
document.getElementById('lang3').addEventListener('click', changeLang);
