// function login(){
//     const email ="user@gmail.com";
//     const password = "user@008";

//     const usereamil = document.getElementById("useremail").value;
//     const passwords = document.getElementById("password").value;

//     if( email === usereamil && password === passwords ){
//     //    window.location.href = "index.html";
//     alert("succesful") 
//     }
// }

function login(event) {

    event.preventDefault();   

    const email = "user@gmail.com";
    const password = "user@008";

    const useremail = document.getElementById("useremail").value;
    const userpassword = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === useremail && password === userpassword) {
        alert("Successful");
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password");
        error.innerHTML = "Error";
    }
}

function Togglepassword(){
    let passwordip =document.getElementById("password");

    if(passwordip.type === "password") 
    {
        passwordip.type = "text";
        passwordip.style.height= "25px";
        passwordip.style.backgroundColor ="white";
        passwordip.style.color ="Black";
        passwordip.style.boxShadow ="1px 1px 1px 1px Black";
        passwordip.style.borderTopRightRadius = "10px";
        // border-top-right-radius: 10px;

    }
    else {
        passwordip.type ="password";
    } 
}

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