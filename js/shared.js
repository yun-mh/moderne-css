window.onscroll = function() {
    dispTopBtn();
    navGetColored();
};

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function dispTopBtn() {
    const el = document.querySelector(".to_page_top");
    if(document.body.scrollTop > vh(25) || document.documentElement.scrollTop > vh(25)) {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
    scrollHeight = document.documentElement.scrollHeight;
    scrollPosition = window.innerHeight + document.documentElement.scrollTop;

    footerHeight = document.querySelector(".footer").clientHeight;

    if ( scrollHeight - scrollPosition  <= footerHeight ) {
        el.style.position = "absolute";
        el.style.bottom = footerHeight + 20 + "px";
    } else {
        el.style.position = "fixed";
        el.style.bottom = 20 + "px";
    }
    
    el.addEventListener('click', function() {
        topFunction();
    });
}

function navGetColored() {
    var nav = document.querySelector(".header--nav__float");
    if(document.body.scrollTop > vh(25) || document.documentElement.scrollTop > vh(25)) {
        nav.classList.remove("hidden");
    } else {
        nav.classList.add("hidden"); 
    }
}

// ナビメニューの操作
function toggleMenu() {
    document.querySelector(".dropdown-content").classList.toggle("show");
}

function toggleMenuFloat() {
    document.querySelector(".dropdown-content__float").classList.toggle("show");
}

document.querySelector(".dropbtn").addEventListener('click', function() {
    document.querySelector(".dropbtn").style.padding = "0 0 0.85rem 0";
    document.querySelector(".dropbtn").style.borderBottom = "3px solid #333";
    toggleMenu(); 
});

document.querySelector(".dropbtn-float").addEventListener('click', function() {
    document.querySelector(".dropbtn-float").style.padding = "0 0 1.8rem 0";
    document.querySelector(".dropbtn-float").style.borderBottom = "5px solid white";
    toggleMenuFloat(); 
});

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.querySelector(".dropdown-content");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}