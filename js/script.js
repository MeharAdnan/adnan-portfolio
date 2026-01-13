/*************** toggle icon navbar ***************/

let hamburgerwrapper = document.querySelector('#hamburger-wrapper');
let navbar = document.querySelector('.navbar');

hamburgerwrapper.onclick = () => {
    hamburgerwrapper.classList.toggle('active');
    navbar.classList.toggle('active');
};


/**************** scroll section active link *****************/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*************** sticky navbar **************/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /************** remove toogle icon and navbar when click navbar link (scroll) ***************/

    hamburgerwrapper.classList.remove('active');
    navbar.classList.remove('active');
};

/****************** Scroll Reveal Javascript liberary ***************/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form, .about-btn', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .portfolio-1, .certificate-content', { origin: 'left' });
ScrollReveal().reveal('.home-content .p, .about-content, .portfolio-2, .display-frame, .skills-a', { origin: 'right' });
ScrollReveal().reveal('.scaleUp', { scale: 0.85 });


/***************** typed.js ****************/

const typed = new Typed('.multiple-skills', {
    strings: ['Front-end Developer', 'Digital Marketer', 'Video, Image Editor'],
    typeSpeed: 18,
    backSpeed: 18,
    backDelay: 1500,
    loop: true
});


/***************** send emails with javascript smtp.js ****************/

const full_name = document.getElementById("full-name");
const email_address = document.getElementById("email-address");
const mobile_number = document.getElementById("mobile-number");
const email_subject = document.getElementById("email-subject");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form-control")[0];


submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let email_body =
        `   <b>Name: </b>${full_name.value}
    <br>
    <b>Email Id: </b>${email_address.value}
    <br>
    <b>Mobile Number: </b>${mobile_number.value}
    <br>
    <b>Email Subject: </b>${email_subject.value}
    <br>
    <b>Message: </b>${message.value}
    `
    
    Email.send({
        SecureToken: "910044e4-1bee-422d-a2d2-ba15d28e5951",
        To: 'meharadnan771@gmail.com',
        From: "meharadnan771@gmail.com",
        Subject: "You have new message from: " + full_name.value,
        Body: email_body

    }).then(
        message => alert("Message Sent!")
        )
});


/***************** clear the form after submit ****************/

let clear = document.getElementById("submit");
let value = document.querySelectorAll(".clearForm");

clear.addEventListener('click', () => {
    if (value != "") {
        setTimeout(() => {
            value.forEach(input => input.value = '');
        }, 1000);
    }
});

/***************** Certification section images ****************/

function showImage(elem) {
    document.getElementById("displayframe").src = elem.nextElementSibling.src;
};


/***************** Light Mood ****************/

let theme = document.getElementById('theme');
let icon = document.getElementById('theme-icon')
let homeImg = document.getElementById('home-img')
let aboutImg = document.getElementById('about-img')
let certificateImg = document.getElementById('display-frame')

theme.onclick = function () {
    document.body.classList.toggle("light-theme");
    icon.classList.toggle("bxs-sun");
    icon.classList.toggle("bxs-moon");

    //     // preventing the theme from refreshing on reload hit
    let mood;

    if (document.body.classList.contains("light-theme")) {
        mood = "LIGHTMOOD"
    } else {
        mood = "DARKMOOD"
    }

    // setting the item to local storage
    localStorage.setItem('PageTheme', JSON.stringify(mood));

};
//     // getting the item from local storage
let GetTheme = JSON.parse(localStorage.getItem('PageTheme'));
console.log(GetTheme)

if (GetTheme === "LIGHTMOOD") {
    document.body.classList = "light-theme";
    icon.classList.toggle("bxs-sun");
    icon.classList.toggle("bxs-moon");
}

/***************** for small screen light mood button ****************/


let theme2 = document.getElementById('theme2');
let icon2 = document.getElementById('theme-icon2')

theme2.onclick = function () {
    document.body.classList.toggle("light-theme");
    icon2.classList.toggle("bxs-sun");
    icon2.classList.toggle("bxs-moon");

    // // preventing the theme from refreshing on reload hit
    let mood2;

    if (document.body.classList.contains("light-theme")) {
        mood2 = "LIGHTMOOD2"
    } else {
        mood2 = "DARKMOOD2"
    }

    // setting the item to local storage
    localStorage.setItem('PageTheme', JSON.stringify(mood2));
};

// // getting the item from local storage
let GetTheme2 = JSON.parse(localStorage.getItem('PageTheme'));
console.log(GetTheme2)

if (GetTheme2 === "LIGHTMOOD2") {
    document.body.classList = "light-theme";
    icon2.classList.toggle("bxs-sun");
    icon2.classList.toggle("bxs-moon");
}


/***************** popup functions on mouse over on experties section ****************/

function popupFunction1() {
    var popup1 = document.getElementById("myPopup1");
    popup1.classList.toggle("show");
}
function popupFunction2() {
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show");
}
function popupFunction3() {
    var popup3 = document.getElementById("myPopup3");
    popup3.classList.toggle("show");
}
function popupFunction4() {
    var popup4 = document.getElementById("myPopup4");
    popup4.classList.toggle("show");
}
function popupFunction5() {
    var popup5 = document.getElementById("myPopup5");
    popup5.classList.toggle("show");
}
function popupFunction6() {
    var popup6 = document.getElementById("myPopup6");
    popup6.classList.toggle("show");
}
function popupFunction7() {
    var popup7 = document.getElementById("myPopup7");
    popup7.classList.toggle("show");
}
