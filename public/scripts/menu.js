function BaseOpenEffects() {
    let Menu = document.querySelector(".InteractiveMenu");
    let Blur = document.querySelector(".InteractiveMenuBlur");
    let Img = document.querySelector(".IM-Image");
    const Body = document.getElementById("body");
    Body.style.overflow = "hidden";
    Menu.style.display = "flex";
    Menu.style.animation = "Menu1 0.4s";
    setTimeout(function() {
        Blur.style.display = "flex";
        Blur.style.animation = "Menu1 0.4s";
        Img.style.display = "flex";
        Img.style.animation = "Menu1 0.4s";
    }, 250)
    setTimeout(function () {
        Menu.style.animation = "none";
        Menu.style.height = "100vh";
    }, 400)
    setTimeout(function() {
        Blur.style.animation = "none";
        Blur.style.height = "100vh";
        Img.style.animation = "none";
        Img.style.height = "100vh";
    }, 650)
}
function BaseCloseEffects() {
    let Menu = document.querySelector(".InteractiveMenu");
    let Blur = document.querySelector(".InteractiveMenuBlur");
    let Img = document.querySelector(".IM-Image");
    const Body = document.getElementById("body");
    Body.style.overflow = "auto";
    Menu.style.animation = "opacityTo0 0.5s";
    Img.style.animation = "opacityTo0 0.5s";
    Blur.style.animation = "opacityTo0 0.5s";
    setTimeout(function () {
        Menu.style.animation = "none";
        Menu.style.display = "none";
        Img.style.animation = "none";
        Img.style.display = "none";
        Blur.style.animation = "none";
        Blur.style.display = "none";
    }, 500)
}
function OpenMenu(page, inner) {
    let cur;
    if(page == 0) cur = "ListEdu";
    if(page == 1) cur = "ListUnv";
    if(page == 2) cur = "ListMed";
    if(page == 3) cur = "ListScn";
    let Open = {
        current: page
    }
    //Анимация
    //--------
    localStorage.setItem(`menu_now`, JSON.stringify(Open));
    let Menu = ["ListEdu", "ListUnv", "ListMed", "ListScn"];
    let Id = ["IMNL-1", "IMNL-2", "IMNL-3", "IMNL-4"];
    let Heads = ["Образование.", "Университет.", "Медицина.", "Наука."]
    let i = 0;
    Menu.forEach(elem => {
        if(elem === cur) {
            document.getElementById(elem).style.display = "flex";
            document.getElementById(Id[i]).style.color = "rgb(255, 255, 255)";
            document.getElementById("IMHT").innerHTML = Heads[i];
        } else {
            document.getElementById(elem).style.display = "none";
            document.getElementById(Id[i]).style.color = "rgb(192, 192, 192)";
        }
        i++;
    })
    if(inner) return;
    BaseOpenEffects();
}
function CloseMenu() {
    BaseCloseEffects();
}