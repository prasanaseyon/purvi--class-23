
function mobilemenu(){
    if(document.getElementById('nav-menu1').style.display=="block"){
        document.getElementById('nav-menu1').style.display='none'
        document.getElementById('nav-menu1').style.visibility='hidden';
    }
    else{
        document.getElementById('nav-menu1').style.display='block'
        document.getElementById('nav-menu1').style.visibility='visible';
    }
}

document.getElementById('hamburger1').addEventListener('click',mobilemenu);



const hamburger2=document.querySelector(".hamburger");

hamburger2.addEventListener("click",()=>{
    hamburger2.classList.toggle("active")
})



