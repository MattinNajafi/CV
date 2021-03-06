let dateOfToday = new Date()
let hourOfNow = dateOfToday.getHours()

/**
 * setting the background depending on time of day
 */
function setBackground() {

    if (hourOfNow <= 10 && hourOfNow >= 5) {
        document.body.style.background = "linear-gradient(to bottom,#FF5F6D,#FFC371)"
    }
    else if (hourOfNow >= 11 && hourOfNow <= 17) {
        document.body.style.background = "linear-gradient(to bottom,#005AA7,#b4dafa)"
    }
    else if (hourOfNow >= 18 && hourOfNow <= 23) {
        document.body.style.background = " linear-gradient(to bottom,#000428,#01396b)"
    }
    else {
        document.body.style.background = "linear-gradient(to bottom,#000000,#434343)"
    }
}
/**
 * validation of the formular, adding style attributes if value not correct.
 */
function validate() {
    let changeText = document.getElementById("describingText")
    var wholeName = document.getElementById("name")
    var mail = document.getElementById("mail")
    var phoneNumber = document.getElementById("number")
    var message = document.getElementById("msg")
    var button = document.getElementById("sentMessage")
    var header = document.getElementById("header")
    
    if (wholeName.value.trim() == "" || mail.value.trim() == "" || phoneNumber.value.trim() == "" 
    || message.value.trim() == "" || message.value.trim() == null) {
        changeText.innerHTML = "No blank values allowed."
        changeText.style.color = "red"
        changeText.style.fontWeight = "900"
        changeText.style.textShadow = "1px 1px 5px black"
        return false
    }
    else{
        changeText.innerHTML = "Thank you for your message. I will be in touch in 24h"
        wholeName.style.display = "none"
        mail.style.display = "none"
        phoneNumber.style.display = "none"
        message.style.display = "none"
        header.style.display = "none"
        button.style.display = "none"
        changeText.style.fontSize = "2rem"
        changeText.style.color = "#20f580"
        changeText.style.fontWeight = "bolder"
        changeText.style.textShadow = "1px 1px 5px black"
        return false
    }
}

setBackground()