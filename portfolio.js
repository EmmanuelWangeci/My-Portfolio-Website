
    var icon = document.getElementById("icon")
    icon.onclick = function(){
        document.body.classList.toggle("light-theme")
        if (document.body.classList.contains("light-theme")) {
            icon.src = "moon.png"
        } else {
            icon.src = "sun.png"
        }
    }
    // portfolio.js
    const logo = document.getElementById("logo");
    const themeIcon = document.getElementById("icon");


document.getElementById("return-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const button = document.getElementById("return-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

const texts = ["Web Developer", "UI/UX Designer", "Graphics Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before typing the next text
    } else {
        setTimeout(type, 150);
    }
})();

// Return to Top Button Script
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const button = document.getElementById("return-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

document.getElementById("return-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }


    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200";
    }

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const button = document.getElementById("return-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("return-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
