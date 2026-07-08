function toggleMenu(){
    let menu = document.getElementById("navMenu");
    let icon = document.getElementById("navIcon");

    menu.classList.toggle("show");
    
    if(menu.classList.contains("show")){
        icon.classList.remove("ri-menu-line");
        icon.classList.add("ri-close-line");
    }
    else{
        icon.classList.add("ri-menu-line");
        icon.classList.remove("ri-close-line");
    }
}