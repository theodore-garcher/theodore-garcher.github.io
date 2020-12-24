window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('header');
    if(window.pageYOffset>0){
        nav.classList.add("ombre");
    }else{
        nav.classList.remove("ombre");
    }
});