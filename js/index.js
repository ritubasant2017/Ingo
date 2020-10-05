//JS for navbar

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//End of JS for navbar

// JS for slide 
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("customerview__mySlides");
    var dots = document.getElementsByClassName("customerview__dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" customerview__active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " customerview__active";
    setTimeout(showSlides, 2000);
}
//End of JS for slide 


//JS for Tab

function openCity(evt, categoryName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("category");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activetext", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " activetext";
}

//End of JS for Tab