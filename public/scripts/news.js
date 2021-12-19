
const NewsModel = require([`../../models/news`]);
//import NewsModel from `../../models/news`
async function LoadNews() {
    //mongoDB
    console.log(window.location.hash);
    let News = document.querySelector(".change");
    
    //const operate = await Operate.findOne({ id: author.id });
    const newData = new NewsModel({
        hash: "#00001",
        title: "Чисто название новости",
        author: "Ярослав",
        content: "бля сосите член",
        createDate: 3000,
        publicDate: 3000        
    })
    await newData.save();
    if(window.location.hash){
        const newsOperate = await NewsModel.findOne({ hash: window.location.hash });
        let NewsTitle = document.querySelector(".newstitle");
        NewsTitle.innerHTML = newsOperate.title
        let NewsAuthor = document.querySelector(".newsauthor");
        NewsAuthor.innerHTML = newsOperate.author
        let NewsContent = document.querySelector(".newscontent");
        NewsContent.innerHTML = newsOperate.content
    }
}
LoadNews();