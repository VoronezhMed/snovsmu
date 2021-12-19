//Скролл до определенной точки с анимацией
function ScrollToAdmission() {
    window.scrollTo({
        top: 1670,
        behavior: "smooth"
    });
    document.getElementById("p-7").style.animation = "admission 2.5s forwards";
    setTimeout(function() {
        document.getElementById("p-7").style.animation = "none";
    }, 2500)
}
function ScrollToNews() {
    window.scrollTo({
        top: 2420,
        behavior: "smooth"
    });
    document.getElementById("media-heading").style.animation = "admission 2.5s forwards";
    setTimeout(function() {
        document.getElementById("media-heading").style.animation = "none";
    }, 2500)
}
function ScrollToCovid() {
    window.scrollTo({
        top: 4352,
        behavior: "smooth"
    });
    document.getElementById("covid-head").style.animation = "admission 2.5s forwards";
    setTimeout(function() {
        document.getElementById("covid-head").style.animation = "none";
    }, 2500)
}
