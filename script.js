reveals = document.querySelectorAll(".reveal");

document.addEventListener('scroll', (scroll)=>{
    const revealHeight = 50;

    for(let i = 0; i < reveals.length; ++i){
        if(window.innerHeight - reveals[i].getBoundingClientRect().top > revealHeight){
            reveals[i].classList.add("active");
        }
    }
});