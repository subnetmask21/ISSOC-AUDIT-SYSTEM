const form = document.getElementById('loginForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //checking if the username and password are null
    if(!username || !password){
        alert("Please Enter your Username and Password");
        return;
    }

    //checking if the username input is too long
    if(username.length > 59){
        alert("Error 1! Try again");
        return;
    }

    //checking if the password input is too long 
    if(password.length > 50){
        alert("Error 2! Try again");
        return;
    }

    //send to the backend 



})