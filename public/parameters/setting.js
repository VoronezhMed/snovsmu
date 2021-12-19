function OpenSettingsSystem() {
    function OpenModalWindow() {
		const modalWindow = document.getElementById("modal");
		const modalContent = document.getElementById("modal-content");
		const Body = document.getElementById("body");
		const Set = document.getElementById("set");
		Set.style.animation = "opacityTo0set 0.5s";
		Body.style.overflow = "hidden";
		modalWindow.style.display = "flex";
		modalWindow.style.backdropFilter = "blur(6px)";
		modalWindow.style.background = "rgba(16, 16, 16, 0.85)";
		modalWindow.style.animation = "opacityTo1 0.5s";
		setTimeout(function() {
			modalWindow.style.animation = "none";
			Set.style.animation = "none";
			Set.style.display = "none";
		}, 500);
	}
    OpenModalWindow();
    const Window = document.getElementById("modal-start");
    function SetStartScreen() {
        Window.style.display = "flex";
        Window.innerHTML = "Выберите нужный раздел";
    }
    SetStartScreen();
    let CurrentScreen = {
        screen: "modal-start",
        none: [
            "modal-lang",
            "modal-graph"
        ]
    };
    document.getElementById("modal-lang").style.display = "none"
    document.getElementById("modal-graph").style.display = "none"
    localStorage.setItem(`settings_screen`, JSON.stringify(CurrentScreen));
    
}
function ChangeScreen(value) {
    let Screen = JSON.parse(localStorage.getItem("settings_screen"));
    let ToChange;
    if(Number(value) == 1) ToChange = "modal-start";
    if(Number(value) == 2) ToChange = "modal-lang";
    if(Number(value) == 3) ToChange = "modal-graph";

    let Visible = document.getElementById(ToChange);
    //Замена элемента прошлого экрана новым экраном
    let Elements = Screen.none;
    for (let i = 0; i < Elements.length; i++) {
        let elem = Elements[i];
        if(elem === ToChange){
            console.log('Сейчас на экране: '+ Screen.screen);
            console.log('Должно быть на экране: ' + ToChange)
            Elements[i] = Screen.screen;
        }
    }
    console.log('Обновленный массив: ' + Elements);
    
    let Cur = new Object();
    Cur.none = Elements;
    Cur.screen = ToChange;
    localStorage.setItem(`settings_screen`, JSON.stringify(Cur));
    Visible.style.display = "flex";
    let New = JSON.parse(localStorage.getItem("settings_screen"));
    New.none.forEach(element => {
        document.getElementById(`${element}`).style.display = "none";
    });
}
function RemoveSet() {
    localStorage.removeItem("settings_screen");
}
function CloseModalWindow() {
    const modalWindow = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const Body = document.getElementById("body");
    const Set = document.getElementById("set");
    Set.style.animation = "opacityTo1set 0.5s";
    Set.style.display = "flex";
    Body.style.overflowY = "visible";
    //modalWindow.style.display = "flex";
    modalWindow.style.backdropFilter = "blur(6px)";
    modalWindow.style.background = "rgba(16, 16, 16, 0.5)";
    modalWindow.style.animation = "opacityTo0 0.5s";
    setTimeout(function() {
        modalContent.style.animation = "opacityTo0 0.5s";
    }, 250);
    setTimeout(function() {
        modalWindow.style.display = "none";
        modalWindow.style.animation = "none";
        Set.style.animation = "none";
    }, 500);
    setTimeout(function() {
        modalContent.style.animation = "none";
    }, 750);
}
