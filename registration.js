console.log("Hello");

let passwortInput = document.querySelector("#passwort");
passwortInput.addEventListener("change", showPasswort)

let span = document.querySelector("span")

let passwortConfirm = document.querySelector("#passwortBestätigen");
passwortConfirm.addEventListener("change", showPasswortConfirm)

function showPasswort(){
    console.log(passwortInput.value)
    comparePasswords()
}

function showPasswortConfirm(){
    console.log(passwortConfirm.value);
    comparePasswords()
}

function comparePasswords(){
    if(passwortInput.value !=="" && passwortConfirm.value!=="" && passwortInput.value !== passwortConfirm.value){
        console.log("nope");
        passwortInput.classList.remove("validPasswort")
        passwortConfirm.classList.remove("validPasswort")
        passwortInput.classList.add("invalidPasswort")
        passwortConfirm.classList.add("invalidPasswort")
        span.classList.add("errorMessage")
        span.innerHTML="Die Passwörter stimmen nicht überein!"
    } else if (passwortInput.value !=="" && passwortConfirm.value!=="" && passwortInput.value === passwortConfirm.value){
        console.log("yippie");
        passwortInput.classList.add("validPasswort")
        passwortConfirm.classList.add("validPasswort")
        passwortInput.classList.remove("invalidPasswort")
        passwortConfirm.classList.remove("invalidPasswort")
        span.innerHTML=""
    } else{
        passwortInput.classList.remove("validPasswort")
        passwortConfirm.classList.remove("validPasswort")
        passwortInput.classList.remove("invalidPasswort")
        passwortConfirm.classList.remove("invalidPasswort")
        span.innerHTML=""

    }
}

