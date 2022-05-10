// Create function to parse Ids
 let id = (id) => document.getElementById(id);

// Create funtion to parse class group
let classes = (classes) => document.getElementsByClassName(classes);

// Call DOM element by thier id
let username = id("username");
let email = id("email");
let password = id("password");
console.log(progressActive.length)

// Call DOM element by thier classnames
let errorMsg = classes("error"),
successIcon = classes("success"),
failureIcon = classes("failure");

// Run engine Function
form.addEventListener("submit",(e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
});
form.addEventListener("submit",(e) => {
    e.preventDefault();

    engine(email, 1, "Email cannot be blank");
});
form.addEventListener("submit",(e) => {
    e.preventDefault();

    engine(password, 2, "Password cannot be blank");
});



// Create Engine Function
function engine(id, serial, message){
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        
        //Icons
        successIcon[serial].style.opacity = "0";
        failureIcon[serial].style.opacity = "1";
    }
    else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        
        //Icons
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
    }
};


