//Фронтенд-LocalStorage
let DefaultFrontendParameters = {
    animations: true,
    blur: true
}
//проверка на параметрические изменения
async function CheckFrontend() {
    let Frontend = JSON.parse(localStorage.getItem("frontend"));
    console.log(`Фронтенд: `+Frontend);
    
    localStorage.setItem(`frontend`, JSON.stringify(DefaultFrontendParameters));
    
}
CheckFrontend();
//Изменения со стороны пользователя в LocalStorage
//Загрузка кастомных CSS-настроек
async function CSSLoading() {
    //Подгрузка активных анимаций настроек
    let LANG = JSON.parse(localStorage.getItem("lang"));
    if(Number(LANG) == 0){
        document.getElementById("m-b-2").style.background = "rgba(46, 255, 91, 0.075)";
        document.getElementById("m-b-2").style.borderLeft = "2px solid rgb(66, 245, 66)";
        document.getElementById("m-b-1").style.borderLeft = "2px solid rgba(255, 255, 255, 0.05)";
    } else {
        document.getElementById("m-b-1").style.background = "rgba(46, 255, 91, 0.075)";
        document.getElementById("m-b-1").style.borderLeft = "2px solid rgb(66, 245, 66)";
        document.getElementById("m-b-2").style.borderLeft = "2px solid rgba(255, 255, 255, 0.05)";
    }

    let Frontend = JSON.parse(localStorage.getItem("frontend"));
    //Прорисовка анимаций
    if(Frontend.animations === false){
        let allAnimates = document.getElementsByClassName("animate");
        console.log(allAnimates);
        for(var i = 0; i < allAnimates.length; i++){
            var elem = allAnimates[i];
            elem.style.transition = "none";
        }
    }
}
CSSLoading();