let total =0
const display =document.getElementById('display')





function input(x){
    if(display.innerHTML==0){
        display.innerHTML=x
        return
    }
 display.innerHTML+=x}

function execute(){
    display.innerHTML=eval(display.innerHTML);
    }
function clr(x){
        display.innerHTML='0'}