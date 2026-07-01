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