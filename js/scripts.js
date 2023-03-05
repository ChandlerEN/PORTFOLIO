/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



/* --------------------OVERLAY-------------------- */

var i = 0;

function move() {
    document.getElementById("myProgress").style.display = "none";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("overlay_text").style.opacity = "1";
    document.getElementById("overlay_text").style.zIndex = "100";
    document.getElementById("overlay").style.cursor = "pointer";
    document.getElementById("overlay").style.pointerEvents = "all";
}

window.onload = move;

function overlay_off() {
  document.getElementById("overlay_right").style.width = "0";
  document.getElementById("overlay_left").style.width = "0";
  document.getElementById("overlay_text").style.opacity = "0";
//   typeWriter();
  setTimeout(function () {
    document.getElementById("overlay").style.display = "none";
    typeWriter();
  }, 500);
}


/* --------------------PARALLAX-------------------- */

var subheading = "Hello there !";
var heading = "I amChandler Nguyen";
var text_var = 0;
var head_ok = 0;

function typeWriter() {
  if (i < 32) {
    if(i < subheading.length){
        document.getElementById("text_subheading").innerHTML += subheading.charAt(i);
    }
    else{
        if (i == 13) {
            document.getElementById("text_subheading").innerHTML += "<br><br><br><br><br>";
        }
        if (text_var == 4) {
            document.getElementById("text_heading").innerHTML += "<br><br>";
            document.getElementById("text_heading").innerHTML += heading.charAt(text_var);
        }
        else{
            document.getElementById("text_heading").innerHTML += heading.charAt(text_var);
        }
        text_var++;
    }
    i++;
    setTimeout(typeWriter, 75);
  }
  else{
      document.getElementById("mainNav").style.visibility = "visible";
      document.getElementById("learn_about").style.visibility = "visible";
      document.body.style.overflow = "visible";
  }
}