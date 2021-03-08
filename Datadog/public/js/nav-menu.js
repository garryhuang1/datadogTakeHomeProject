let initHomeNav = function(){
    const navHamburger = document.getElementById("nav-menu-hamburger");
    const navMenu = document.getElementById("nav-menu");
    navHamburger.addEventListener("click", function(){
        bindNavOpenClose(navMenu);
    });
}

initHomeNav();

function bindNavOpenClose(nav){
    if(!nav){
        return;
    }

    if(isVisible(nav)){
        nav.classList.remove("d-block");
        nav.classList.add("d-none");       
    }
    else{
        nav.classList.remove("d-none")
        nav.classList.add("d-block")
    }
}

function isVisible(obj){
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}