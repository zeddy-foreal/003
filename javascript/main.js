let api_url = "https://api.quotable.io/random";
let box = document.querySelector(".quotes");
let auth = document.querySelector(".author");
let times = []
async function quote(url) {
    box.innerHTML = ""
    let response = await fetch(url);
    let data = await response.json()

    let words = data.content;
    let author = data.author;
    
    words.split(" ").forEach((word)=>{
        let span = document.createElement("span");
        span.className = "active"
        span.innerHTML = word;

        box.appendChild(span)
    })
    activate()
    auth.innerHTML = author;
}

quote(api_url)

document.querySelector(".New").onclick = ()=>{
    document.querySelectorAll(".quotes span").forEach((span)=>{
        span.classList.add("active")
    })   

    auth.classList.add("active")
    
    let tme = setTimeout(()=>{
        quote(api_url)
    },300)
    tme()
}
function activate(){
    let cons = 60;
    document.querySelectorAll(".quotes span").forEach((span,num)=>{
        let time = setTimeout(()=>{span.classList.remove("active")},num*cons);
        times.push(time)
    })
    let time2 = setTimeout(()=>{auth.classList.remove("active")},(document.querySelectorAll(".quotes span").length+3)*cons)
    times.push(time2);
}