//const cards = document.querySelector(".cards");
var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
setInterval(function() {
    var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    


}, 20)
//const images = document.querySelectorAll(".card__img");
//const backgrounds = document.querySelectorAll(".card__bg");
const covid = document.querySelector(".covid-img");
const info = document.querySelector(".info");
const range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
if (timeout) {
    window.cancelAnimationFrame(timeout);
}
    
timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    covid.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    //info.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    //[].forEach.call(images, (image) => {
    //image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    //});

    //[].forEach.call(backgrounds, (background) => {
    //background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    //})
    })
}, false);


//Массивы данных
let images_subheader = [];
let headings_subheader = ["Стань частью медицины.", "Памятка первокурснику."];
let subheadings_subheader = ["Сегодня вы стоите на пороге знаменательного события – выбора жизненного пути. Мы верим, что выбор профессии врача, медицинской сестры или фармацевта хорошо осознан и глубоко продуман вами.", "С расписанием занятий, тематическим планом и другим полезным материалом можно ознакомиться, посетив Портал студента."];
function Change() {
    if(displayNum){
        document.getElementById('p-5').innerHTML = headings_subheader[1];
        document.getElementById('p-6').innerHTML = subheadings_subheader[1];
        displayNum = false;
    } else {
        document.getElementById('p-5').innerHTML = headings_subheader[0];
        document.getElementById('p-6').innerHTML = subheadings_subheader[0];
        displayNum = true;
    }
}
//Автоматика
let displayNum = true;
document.getElementById('p-6').innerHTML = subheadings_subheader[0];
document.getElementById('p-5').innerHTML = headings_subheader[0];
setTimeout(function(){
    document.getElementById('block-1-name').style.animation = "subheaderanimation2 1s";
}, 7000)
setInterval(function() {
    Change();
    document.getElementById('block-1-name').style.animation = "subheaderanimation1 1s";
    setTimeout(function(){
        document.getElementById('block-1-name').style.animation = "none";
    }, 2200)
    setTimeout(function(){
        document.getElementById('block-1-name').style.animation = "subheaderanimation2 1s";
    }, 7000)
}, 8000)
//document.getElementsById('p-5').style.animation = "subheaderanimation1 1.5s";
//document.getElementById('p-6').innerHTML = subheadings_subheader[1];
//document.getElementById('block-1-name').style.animation = "none"

//Анимация избранных новостей
let News1 = document.getElementById('fimg-1');
let News2 = document.getElementById('fimg-2');
let News3 = document.getElementById('now-img');
let News1t = document.getElementById('ftxt-1');
let News2t = document.getElementById('ftxt-2');
let News3t = document.getElementById('text-now');
let DateNews = document.getElementById('date-now');
let BackNews = document.getElementById('favorite-img');
//Даты
let NewsDates = ['10-08-2021', '08-08-2021', '07-08-2021'];
//Новостные заголовки
let NewsHeadings = ['Информация о повторной вакцинации против COVID-19','Вниманию иностранных обучающихся. Расширен перечень иностранных государств, с которыми открыта граница для въезда в Россию','Информация для первокурсников от Совета обучающихся университета'];
//Изображения
let NewsImages = ['https://apteka-03.ru/wp-content/uploads/2021/06/orig-1.jpg','https://cdn.fishki.net/upload/post/201604/04/1907289/350b009feed9c82d44c3df340f9865cd.jpg','https://glas.ru/uploads/images_36/1606506832_med.jpg'];
//Первичная установка
News1t.innerHTML = NewsHeadings[0];
News2t.innerHTML = NewsHeadings[1];
News3t.innerHTML = NewsHeadings[2];
News1.style.backgroundImage = `url(${NewsImages[0]})`;
News2.style.backgroundImage = `url(${NewsImages[1]})`;
News3.style.backgroundImage = `url(${NewsImages[2]})`;
DateNews.innerHTML = NewsDates[2];
//Блюр
News1.style.filter = 'blur(3px)';
News2.style.filter = 'blur(3px)';
News1t.style.filter = 'blur(2.4px)';
News2t.style.filter = 'blur(2.4px)';
//Бэкграунд
document.getElementById('favorite-img').style.backgroundImage = `linear-gradient(180deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url(${NewsImages[2]})`;
document.getElementById('favorite-img').style.filter = 'blur(1px)';
//Переменная позиционирования
let displayNews = 0;
//Функция изменения состояния в перерыве сессии анимации
function ChangeNews() {
    //Если позиция 0
    if(displayNews == 0){
        News1t.innerHTML = NewsHeadings[1];
        News2t.innerHTML = NewsHeadings[2];
        News3t.innerHTML = NewsHeadings[0];
        News1.style.backgroundImage = `url(${NewsImages[1]})`;
        News2.style.backgroundImage = `url(${NewsImages[2]})`;
        News3.style.backgroundImage = `url(${NewsImages[0]})`;
        DateNews.innerHTML = NewsDates[0];
        BackNews.style.backgroundImage = `linear-gradient(180deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url(${NewsImages[0]})`;
        displayNews = 1;
    } else
    if(displayNews == 1) {
        News1t.innerHTML = NewsHeadings[2];
        News2t.innerHTML = NewsHeadings[0];
        News3t.innerHTML = NewsHeadings[1];
        News1.style.backgroundImage = `url(${NewsImages[2]})`;
        News2.style.backgroundImage = `url(${NewsImages[0]})`;
        News3.style.backgroundImage = `url(${NewsImages[1]})`;
        DateNews.innerHTML = NewsDates[1];
        BackNews.style.backgroundImage = `linear-gradient(180deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url(${NewsImages[1]})`;
        displayNews = 2;
    } else
    if(displayNews == 2) {
        News1t.innerHTML = NewsHeadings[0];
        News2t.innerHTML = NewsHeadings[1];
        News3t.innerHTML = NewsHeadings[2];
        News1.style.backgroundImage = `url(${NewsImages[0]})`;
        News2.style.backgroundImage = `url(${NewsImages[1]})`;
        News3.style.backgroundImage = `url(${NewsImages[2]})`;
        DateNews.innerHTML = NewsDates[2];
        BackNews.style.backgroundImage = `linear-gradient(180deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url(${NewsImages[2]})`;
        displayNews = 0;
    };
};
let Superior = document.getElementById('fav-1');
let Inferior = document.getElementById('fav-2');
let Center = document.getElementById('favorite-now');
//Блок управления анимацией центрального блока
//Первичная анимация, обьявление лояльного стоп-ключа
BackNews.style.animation = 'News 10s infinite';
Superior.style.animation = 'News 10s infinite';
Inferior.style.animation = 'News 10s infinite';
Center.style.animation = 'News 10s infinite';
setInterval(function() {
    ChangeNews();
}, 10000)



//ПОЛИФУНКЦИОНАЛЬНЫЙ БЛОК----------------------------------------

//ФУНКЦИИ АНИМАЦИЙ
//Анимация автоскроллинга по инициации пользователем


//Функция проверки блока text-now на предмет необходимости overflow hidden
var a = document.querySelector('#text-now');
function isOverflowed(el) {
    return el.scrollWidth > el.offsetWidth || el.scrollHeight > el.offsetHeight;
};
console.log(isOverflowed(a));
if(isOverflowed(a)){
    document.getElementById("text-now").style.fontSize = "24px";
}