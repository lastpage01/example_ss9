let sum = document.getElementById("cong");
let sub = document.getElementById("tru");
let cout = document.getElementById("value");
sum.addEventListener("click",function(){
    cout.innerText = ++cout.innerText;
})
sub.addEventListener("click",function(){
    cout.innerText = --cout.innerText;
})