let languagesList = {
    languages: 
        [
         ["ВОРОНЕЖСКИЙ", "VORONEZH"],
         ["ГОСУДАРСТВЕННЫЙ МЕДУНИВЕРСИТЕТ ИМ. Н. Н. БУРДЕНКО", "N. N. BURDENKO STATE MEDICAL UNIVERSITY"],
         ["Поступление","Admission"],
         ["Новости", "News"],
         ["Коронавирус", "Coronavirus"],
         ["О ВУЗе", "About us"]
        ]
}

//Работа с LocalStorage

function Translate() { 
    this.init =  function(attribute, lng) {
      this.attribute = attribute;
      this.lng = lng;
    };
    this.process = function() {
      var _self = this;
        var allDom = document.getElementsByClassName("clang");
        console.log(allDom)
        for(var i = 0; i < allDom.length; i++){
            var elem = allDom[i];
            console.log(elem)
            var key = elem.getAttribute(_self.attribute);
            let toNum = Number(key);
            if(key != null) {
                let langs = languagesList.languages;
                for(var z = 0; z < langs.length; z++) {
                    if(toNum == z){
                        elem.innerHTML = langs[i][this.lng];
                    }
                }
            }
        }
    };
}

function ChangeLanguage(set) {
    //Получение
    //let LANG = JSON.parse(localStorage.getItem("lang"));
    LANG = Number(set)
    if(!LANG){
        LANG = 0;
    }
    console.log(LANG);
    Number(LANG);
    let value;
    if(LANG == 0){
        value = 1;
        LANG = 1;
        document.getElementById("m-b-1").style.background = "rgba(46, 255, 91, 0.075)";
        document.getElementById("m-b-2").style.background = "rgba(255, 255, 255, 0.05)";
        document.getElementById("m-b-1").style.borderLeft = "2px solid rgb(66, 245, 66)";
        document.getElementById("m-b-2").style.borderLeft = "2px solid rgba(255, 255, 255, 0.05)";
        localStorage.setItem(`lang`, JSON.stringify(LANG));
    } else {
        value = 0;
        LANG = 0;
        document.getElementById("m-b-2").style.background = "rgba(46, 255, 91, 0.075)";
        document.getElementById("m-b-1").style.background = "rgba(255, 255, 255, 0.05)";
        document.getElementById("m-b-2").style.borderLeft = "2px solid rgb(66, 245, 66)";
        document.getElementById("m-b-1").style.borderLeft = "2px solid rgba(255, 255, 255, 0.05)";
        localStorage.setItem(`lang`, JSON.stringify(LANG));
    }
    var translate = new Translate();
    var currentLang = value;
    var attributeName = 'data-lang';
    translate.init(attributeName, currentLang);
    translate.process();
}
function CurrentLang() {
    let LANG = JSON.parse(localStorage.getItem("lang"));
    let now
    if(Number(LANG) == 0) {now = `ru`} else {now = `en`}
}
CurrentLang();
function LocalTranslate() {
    let LANG = JSON.parse(localStorage.getItem("lang"));
    var translate = new Translate();
    var currentLang = Number(LANG);
    var attributeName = 'data-lang';
    translate.init(attributeName, currentLang);
    translate.process();
}
LocalTranslate();