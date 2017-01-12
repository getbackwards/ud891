'use strict';

// This is my crack at getting things to work
// which ended up being a bit rubbish and I ended up not using

function setHeadingFocus () {

    var menuLinks = document.getElementById('menu').getElementsByTagName('a');
    //console.log(menuLinks);
    var headings = document.getElementsByTagName('h2');
    var headingText = '';
    var menuText = '';

    var i = 0;

    for (i; i < menuLinks.length; i++) {
        menuText = menuLinks[i].innerText.toLowerCase();
        headingText = headings[i].innerText.toLowerCase();
        //console.log('Text for menu is ' + menuText + ' and heading text is ' + headingText);
    };

    console.log('Text for menu is ' + menuText + ' and heading text is ' + headingText);

    menuLinks.onclick = function() {
        console.log('link clicked');
    };


    for (i; i < headings.length; i++) {
        headingText = headings[i].innerText;
        console.log('Heading text is ' + headingText);

        // if (headingText === "What is Vegemite?") {
        //     headings[i].focus();
        // } else if (headingText === "Recipes") {
        //     headings[i].focus();
        // } else if (headingText === "Ingredients") {
        //     headings[i].focus();
        // };
    }

};

setHeadingFocus();