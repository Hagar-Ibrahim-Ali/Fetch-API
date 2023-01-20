/////////////////////////////////////////
///////  The XMLHttpRequest  ///////////
// var HttpClient = new XMLHttpRequest();
// HttpClient.open("get","https://newsapi.org/v2/everything?q=Apple&from=2022-12-21&sortBy=popularity&apiKey=50a4cfb285f34e23802e95bee8268c1c")
// HttpClient.send()
// console.log(HttpClient.response)
var responseBody = {}
var articles = []


///// VAR PARENTS ////
var MainArticle = document.querySelector("#MainArticle")
var SubNews = document.querySelector("#SubNews")
var RecentNewsContainer = document.querySelector("#RecentNewsContainer")


fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-12-21&sortBy=popularity&apiKey=50a4cfb285f34e23802e95bee8268c1c`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        articles = data.articles
        console.log(articles);
        showMainArticle ()
        showSubNews ()
        showRecentNewsContainer ()
    })
    .catch(error => console.log(error))

// HttpClient.addEventListener('readystatechange',function(){
//     if(HttpClient.readyState == 4)
//     {
//         responseBody = (JSON.parse(HttpClient.response))
//         articles = responseBody.articles

//         console.log(responseBody);
//         console.log(articles);
//         showMainArticle ()
//         showSubNews ()
//         showRecentNewsContainer ()
//     }
// })

//////////// VAR CHILDREN ///////
var MainArticleBody = ""
var SubNewsBody = ""
var RecentNewsContainerBody = ""

///////// SHOW ARTICLE ////////

// Show Main Article //
function showMainArticle (){
    MainArticleBody +=
    `
    <div class=" col-lg-9">
    <div class="binduz-er-editors-pack-thumb">
        <img src="${articles[0].urlToImage}" alt="">
    </div>
</div>
<div class=" col-lg-3">
    <div class="binduz-er-editors-pack-content">
        <div class="binduz-er-meta-item">

            <div class="binduz-er-meta-date p-0">
                <span class="span m-0"><i class="fal fa-calendar-alt"></i>${articles[0].publishedAt}</span>
            </div>
        </div>
        <h4 class="binduz-er-title">${articles[0].title}<a href="#"></a>
        </h4>
        <div class="binduz-er-meta-author">
            <div class="binduz-er-author">
                <img src="assets/images/user-2.png" alt="">
                <span>By <span>${articles[0].author}</span></span>
            </div>
        </div>
    </div>
</div>
    `
    MainArticle.innerHTML = MainArticleBody
}
// Show SUB Article //
function showSubNews (){
    for (var i = 1 ; i < 5 ; i++)
    {
        SubNewsBody +=
    `
    <div class=" col-lg-3 col-md-6">
    <div class="binduz-er-video-post binduz-er-recently-viewed-item">
        <div class="binduz-er-latest-news-item">
            <div class="binduz-er-thumb">
                <img src="${articles[i].urlToImage}" alt="">
            </div>
            <div class="binduz-er-content">
                    <div class="binduz-er-meta-date">
                        <span class="span m-0"><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt}</span>
                    </div>
                </div>
                <h5 class="binduz-er-title mt-10"><a href="#">${articles[i].title}</a></h5>
                <div class="binduz-er-meta-author">
                    <span>By <span>${articles[i].author}</span></span>
                </div>
            </div>
        </div>
    </div>
</div>
    `
    }
    SubNews.innerHTML = SubNewsBody
}
// Show Recent News //
function showRecentNewsContainer (){
    for (var i = 5; i < 18; i++)
    {
    RecentNewsContainerBody +=
    `
<div class="binduz-er-recent-news-item mb-20">
    <div class="binduz-er-thumb">
        <img src="${articles[i].urlToImage}" alt="">
    </div>
    <div class="binduz-er-content ">
        <div class="binduz-er-meta-item">

            <div class="binduz-er-meta-date ali">
                <span class="span m-0"><i class="fal fa-calendar-alt "></i>${articles[i].publishedAt}</span>
            </div>
        </div>
        <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
        <p>${articles[i].content}</p>
    </div>
</div>
    `
    }
    RecentNewsContainer.innerHTML = RecentNewsContainerBody
}