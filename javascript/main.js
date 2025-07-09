let range = document.querySelector(".range");
let span = document.querySelector(".progress");
let length = document.querySelector(".num");
let password = document.querySelector(".password");
let generate = document.querySelector(".gen");
let boxes = document.querySelectorAll(".box");
let copy = document.querySelector(".copy")
// #########

let letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_',
    '=', '+', '{', '}', '[', ']', '|', ';', ':', "'", '"', 
    ',', '.', '/', '<', '>', '?', '~', '`'];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let sletters = letters.split(",");
let cletters = letters.split(",").map((lett)=>{return lett.toUpperCase()});
let allowedChars = [];
let result = ""
// #########

range.oninput = ()=>{
    if(range.value < 6){
        range.value = 6;
    }
    length.innerHTML = range.value;
    span.style.width = `${range.value}%`
}

generate.onclick = ()=>{
        let len = Number(length.innerHTML);

        password.innerHTML = "";
        allowedChars.length = 0;
        boxes.forEach((box)=>{
            if (box.checked === true){
                if(box.classList.contains("numbers")){
                    mix_array(numbers)
                }else if(box.classList.contains("uppercase")){
                    mix_array(cletters)
                }else if(box.classList.contains("lowercase")){
                    mix_array(sletters)
                }else if(box.classList.contains("symbols")){
                    mix_array(symbols)
                }
            }
        })
        if (allowedChars.length == 0){
            return 0;
        }else{
            for (let i = 0; i<len; i++){
        password.innerHTML += allowedChars[Math.floor(Math.random()*allowedChars.length)];
        }
        }
        
}
copy.onclick = ()=>{
    navigator.clipboard.writeText(password.innerHTML)
}
function mix_array(arr){
    allowedChars = allowedChars.concat(arr)
}
