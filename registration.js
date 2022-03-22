console.log("Hello");

let passwortInput = document.querySelector("#passwort");
passwortInput.addEventListener("change", showPasswort)

let span = document.querySelector("span")

let passwortConfirm = document.querySelector("#passwortBestätigen");
passwortConfirm.addEventListener("change", showPasswortConfirm)

function showPasswort(){
    console.log(passwortInput.value)
}

function showPasswortConfirm(){
    console.log(passwortConfirm.value);
    comparePasswords()
}

function comparePasswords(){
    if(passwortInput.value !=="" && passwortConfirm.value!=="" && passwortInput.value === passwortConfirm.value){
        console.log("yippie");
        passwortInput.classList.add("validPasswort")
        passwortConfirm.classList.add("validPasswort")
    }else{
        console.log("nope");
        passwortInput.classList.add("invalidPasswort")
        passwortConfirm.classList.add("invalidPasswort")
        span.classList.add("errorMessage")
        span.innerHTML="Die Passwörter stimmen nicht überein!"
    }
}


//TODO Logik PasswortValidation anpassen//

