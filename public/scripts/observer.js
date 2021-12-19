const square1 = document.querySelector('.trans-1');
const square2 = document.querySelector('.trans-2');
const square3 = document.querySelector('.trans-3');
const square4 = document.querySelector('.trans-4');
const square5 = document.querySelector('.trans-5');
const square6 = document.querySelector('.trans-b');
function IntersectionObserve(value) {
    console.log(value);
    if(value){
        const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            square1.style.animation = "opacityTo1 4s"
            setTimeout(function() {
                square1.style.animation = "none";
                square1.style.opacity = "1";
            }, 4000)
            return;
            }
        });
        });
        const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            square2.style.animation = "opacityTo1 4s"
            setTimeout(function() {
                square2.style.animation = "none";
                square2.style.opacity = "1";
            }, 4000)
            return;
            }
        });
        });
        const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
        
            square3.style.animation = "opacityTo1 4s"
            setTimeout(function() {
                square3.style.animation = "none";
                square3.style.opacity = "1";
            }, 4000)
            return;
            }
        });
        });
        const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            square4.style.animation = "opacityTo1 4s"
            setTimeout(function() {
                square4.style.animation = "none";
                square4.style.opacity = "1";
            }, 4000)
            return;
            }
        });
        });
        const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            square5.style.animation = "opacityTo1 4s"
            setTimeout(function() {
                square5.style.animation = "none";
                square5.style.opacity = "1";
            }, 4000)
            return;
            }
        });
        });
        const observer6 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            square6.style.animation = "opacityTo1 4s"
            setTimeout(function() {
                square6.style.animation = "none";
                square6.style.opacity = "1";
            }, 4000)
            return;
            }
        });
        });
        observer1.observe(document.querySelector('.trans-1'));
        observer2.observe(document.querySelector('.trans-2'));
        observer3.observe(document.querySelector('.trans-3'));
        observer4.observe(document.querySelector('.trans-4'));
        observer5.observe(document.querySelector('.trans-5'));
        observer6.observe(document.querySelector('.trans-b'));
    } else {
        document.querySelector('.trans-1').style.opacity = "1";
        document.querySelector('.trans-2').style.opacity = "1";
        document.querySelector('.trans-3').style.opacity = "1";
        document.querySelector('.trans-4').style.opacity = "1";
        document.querySelector('.trans-5').style.opacity = "1";
        document.querySelector('.trans-b').style.opacity = "1";
    }
}
let Frontend = JSON.parse(localStorage.getItem("frontend"));
IntersectionObserve(Frontend.animations);