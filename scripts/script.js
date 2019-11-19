let today = new Date()
let hour = today.getHours()
let firstText = document.getElementById("frontText")
window.addEventListener("scroll", scrolling)
document.getElementById("logo").addEventListener("mouseover", logo)
document.getElementById("personal").addEventListener("click", personal)
document.getElementById("skills").addEventListener("click", skills)
document.getElementById("projects1").addEventListener("mouseover", portfolioText1)
document.getElementById("projects2").addEventListener("mouseover", portfolioText2)
document.getElementById("projects3").addEventListener("mouseover", portfolioText3)
document.getElementById("projects4").addEventListener("mouseover", portfolioText4)
document.querySelector(".hamburger").addEventListener("click", hamburgerMenu)


// document.onmousemove = mouseCircles;
// function mouseCircles() {

//     let circle = document.createElement("div")
//     circle.setAttribute("id", "circles")
//     document.body.appendChild(circle)

//     circle.style.left = event.clientX + "px"
//     circle.style.top = event.clientY + "px"

//     circle.style.left = circle.offsetLeft - 20 + "px"
//     circle.style.top = circle.offsetTop - 20 + "px"


//     circle.style.transition = "all 0.7s linear 0s"
//     circle.style.opacity = "0"

//     circle.style.width = "40px"
//     circle.style.height = "40px"
//     circle.style.borderRadius = "30px"


// }

/**
 * Setting my background depending on which time it is
 */
function setBackground() {

    if (hour <= 10 && hour >= 5) {
        document.body.style.background = "linear-gradient(to bottom,#FF5F6D,#FFC371)"
    }
    else if (hour >= 11 && hour <= 17) {
        document.body.style.background = "linear-gradient(to bottom,#005AA7,#FFFDE4)"
    }
    else if (hour >= 18 && hour <= 23) {
        document.body.style.background = " linear-gradient(to bottom,#000428,#01396b)"
    }
    else {
        document.body.style.background = "linear-gradient(to bottom,#000000,#434343)"
    }
}

/**
 * Start of changing text
 */
function firstFunction() {
    setTimeout(secondText, 1000)
}
/**
 * Changing the opacity from the first text
 */
function secondText() {
    firstText.style.transition = "opacity 1.5s linear 0s"
    let opacity = firstText.style.opacity = "0";
    setTimeout(replacingText, 1500)
}
/**
 * changing text 
 */
function replacingText() {
    let changeText = firstText.innerHTML.replace("Front End Developer", "Just Kidding")
    firstText.style.transition = "opacity 1.5s linear 0s"
    firstText.style.opacity = "1";
    document.getElementById("frontText").innerHTML = changeText
    setTimeout(finalOpacity, 1500)

}
/**
 * making the last opacity of the text and preparing for the last and final text
 */
function finalOpacity() {
    firstText.style.transition = "opacity 1.5s linear 0s"
    let opacity = firstText.style.opacity = "0";
    setTimeout(finalText, 1500)
}
/**
 * finaltext
 */
function finalText() {
    let changeText = firstText.innerHTML.replace("Just Kidding", "Soon Front <br>End Developer")
    firstText.style.transition = "opacity 2s linear 0s"
    firstText.style.opacity = "1";
    document.getElementById("frontText").innerHTML = changeText
}

/**
 * My scrollarrow, whether its displayed or no, depending on my scroll
 */
function scrolling() {
    if (window.scrollY != 0) {
        document.getElementById("scrollArrow").style.transition = "opacity 1.5s linear 0s"
        var opacity = document.getElementById("scrollArrow").style.opacity = "0"
        if (opacity == 0) {
            document.getElementById("scrollArrow").style.display = "none"
        }
    }

    else {
        document.getElementById("scrollArrow").style.transition = ""
        document.getElementById("scrollArrow").style.opacity = ""
        document.getElementById("scrollArrow").style.display = ""
    }
}

/**
 * Making the cursor, pointy on my logo
 */
function logo() {
    document.getElementById("logo").style.cursor = "pointer"
}

/**
 * my hamburgermenu
 */
function hamburgerMenu() {
    let activate = document.querySelector(".hamburger")
    activate.classList.toggle("is-active")

    let mobilemenu = document.querySelector(".mobilemenu")
    mobilemenu.classList.toggle("hide")

    // let logohiding = document.getElementById("logo")
    // logohiding.classList.toggle("hide")

}

/**
 * Hiding the skillbox when you click on personal button, and showing personalbox
 */
function personal() {
    document.getElementById("aboutMeSkills").style.display = "none"
    document.getElementById("aboutMeText").style.display = "block"
}
/**
 * Hiding the personalbox when you click on skills button, and showing skillsbox
 */
function skills() {
    document.getElementById("aboutMeText").style.display = "none"
    document.getElementById("aboutMeSkills").style.display = "block"


}
/**
 * hiding the image and displaying the text when mouseover, and chaning the background
 */
function portfolioText1() {
    document.getElementById("imgOfProject1").style.display = "none"
    document.getElementById("imgtext1").style.display = "flex"
    document.getElementById("projects1").style.background = "whitesmoke"


}
/**
 * hiding the image and displaying the text when mouseover, and chaning the background
 */
function portfolioText2() {
    document.getElementById("imgOfProject2").style.display = "none"
    document.getElementById("imgtext2").style.display = "flex"
    document.getElementById("projects2").style.background = "whitesmoke"


}
/**
 * hiding the image and displaying the text when mouseover, and chaning the background
 */
function portfolioText3() {
    document.getElementById("imgOfProject3").style.display = "none"
    document.getElementById("imgtext3").style.display = "flex"
    document.getElementById("projects3").style.background = "whitesmoke"

}
/**
 * hiding the image and displaying the text when mouseover, and chaning the background
 */
function portfolioText4() {

    document.getElementById("imgOfProject4").style.display = "none"
    document.getElementById("imgtext4").style.display = "flex"
    document.getElementById("projects4").style.background = "whitesmoke"

}
/**
 * going back to normal when mouseleave, displaying the image again and hiding the text
 */
function portfolioimg1() {
    document.getElementById("imgOfProject1").style.display = ""
    document.getElementById("imgtext1").style.display = "none"
    document.getElementById("projects1").style.background = ""

}
/**
 * going back to normal when mouseleave, displaying the image again and hiding the text
 */
function portfolioimg2() {
    document.getElementById("imgOfProject2").style.display = ""
    document.getElementById("imgtext2").style.display = "none"
    document.getElementById("projects2").style.background = ""
}
/**
 * going back to normal when mouseleave, displaying the image again and hiding the text
 */
function portfolioimg3() {
    document.getElementById("imgOfProject3").style.display = ""
    document.getElementById("imgtext3").style.display = "none"
    document.getElementById("projects3").style.background = ""
}
/**
 * going back to normal when mouseleave, displaying the image again and hiding the text
 */
function portfolioimg4() {
    document.getElementById("imgOfProject4").style.display = ""
    document.getElementById("imgtext4").style.display = "none"
    document.getElementById("projects4").style.background = ""
}

setBackground();