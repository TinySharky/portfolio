var a = 0;
var b = 0;
var c = 0;
var d = 0;
var tel = document.getElementById("tel");
var mail = document.getElementById("mail");
var adresse = document.getElementById("adresse");
var linkedin = document.getElementById("linkedin");

var hide_tel = document.getElementById("hide-tel");
var hide_mail = document.getElementById("hide-mail");
var hide_adr = document.getElementById("hide-adr");
var hide_linkedin = document.getElementById("hide-link");

var img_tel = document.getElementById("img-tel");
var img_mail = document.getElementById("img-mail");
var img_adr = document.getElementById("img-adr");
var img_linkedin = document.getElementById("img-link");

if (window.matchMedia("(max-width: 1400px)").matches){
    var taille = '125px'
}
else if (window.matchMedia("(min-width: 1401px)").matches){
    var taille = '150px'
}

tel.addEventListener('click', () => {
    mail.style.transitionDuration = '0ms';
    adresse.style.transitionDuration = '0ms';
    linkedin.style.transitionDuration = '0ms';
    if ( a == 0 ){
        setTimeout(function () {
            tel.style.transitionDuration = '500ms';
            mail.style.visibility = 'hidden';
            linkedin.style.visibility = 'hidden';
            adresse.style.visibility = 'hidden'; 
            
            tel.style.transform = 'translateX(525px)';
            tel.style.borderRadius = '10px';
            tel.style.width = '500px';
            tel.style.height = taille;
        }, 0);
        setTimeout(function () {
            img_tel.style.display = 'none';
            hide_tel.style.display = 'block';
        }, 300);
        a ++;
    }
    else{
        hide_tel.style.display = 'none';
        tel.style.borderRadius = '50%';
        tel.style.width = taille;
        tel.style.height = taille;
        tel.style.transform = 'translateX(0px)';
        img_tel.style.display = 'block';
        setTimeout(function () {
            mail.style.visibility = 'visible';
            adresse.style.visibility = 'visible';    
            linkedin.style.visibility = 'visible';
        }, 300);
        a --;
    }
});

mail.addEventListener('click', () => {
    tel.style.transitionDuration = '0ms';
    adresse.style.transitionDuration = '0ms';
    linkedin.style.transitionDuration = '0ms';
    if ( b == 0 ){
        setTimeout(function () {
            mail.style.transitionDuration = '500ms';
            tel.style.visibility = 'hidden';
            linkedin.style.visibility = 'hidden';
            adresse.style.visibility = 'hidden';  
            
            mail.style.transform = 'translateX(175px)';
            mail.style.borderRadius = '10px';
            mail.style.width = '500px';
            mail.style.height = taille;  
        }, 0);
        setTimeout(function () {
            img_mail.style.display = 'none';
            hide_mail.style.display = 'block';
        }, 300);
        b ++;
    }
    else{
        hide_mail.style.display = 'none';
        mail.style.borderRadius = '50%';
        mail.style.width = taille;
        mail.style.height = taille;
        mail.style.transform = 'translateX(0px)';
        img_mail.style.display = 'block';
        setTimeout(function () {
            tel.style.visibility = 'visible';
            adresse.style.visibility = 'visible';    
            linkedin.style.visibility = 'visible';
        }, 300);
        b --;
    }
});

adresse.addEventListener('click', () => {
    tel.style.transitionDuration = '0ms';
    mail.style.transitionDuration = '0ms';
    linkedin.style.transitionDuration = '0ms';
    if ( c == 0 ){
        setTimeout(function () {
            adresse.style.transitionDuration = '500ms';
            tel.style.visibility = 'hidden';
            linkedin.style.visibility = 'hidden';
            mail.style.visibility = 'hidden';  
            
            adresse.style.transform = 'translateX(-175px)';
            adresse.style.borderRadius = '10px';
            adresse.style.width = '500px';
            adresse.style.height = taille;  
        }, 0);
        setTimeout(function () {
            img_adr.style.display = 'none';
            hide_adr.style.display = 'block';
        }, 300);
        c ++;
    }
    else{
        hide_adr.style.display = 'none';
        adresse.style.borderRadius = '50%';
        adresse.style.width = taille;
        adresse.style.height = taille;
        adresse.style.transform = 'translateX(0px)';
        img_adr.style.display = 'block';
        setTimeout(function () {
            tel.style.visibility = 'visible';
            mail.style.visibility = 'visible';    
            linkedin.style.visibility = 'visible';
        }, 300);
        c --;
    }
});

linkedin.addEventListener('click', () => {
    mail.style.transitionDuration = '0ms';
    adresse.style.transitionDuration = '0ms';
    tel.style.transitionDuration = '0ms';
    if ( d == 0 ){
        setTimeout(function () {
            linkedin.style.transitionDuration = '500ms';
            mail.style.visibility = 'hidden';
            tel.style.visibility = 'hidden';
            adresse.style.visibility = 'hidden'; 
            
            linkedin.style.transform = 'translateX(-525px)';
            linkedin.style.borderRadius = '10px';
            linkedin.style.width = '500px';
            linkedin.style.height = taille;
        }, 0);
        setTimeout(function () {
            img_linkedin.style.display = 'none';
            hide_linkedin.style.display = 'block';
        }, 300);
        d ++;
    }
    else{
        hide_linkedin.style.display = 'none';
        linkedin.style.borderRadius = '50%';
        linkedin.style.width = taille;
        linkedin.style.height = taille;
        linkedin.style.transform = 'translateX(0px)';
        img_linkedin.style.display = 'block';
        setTimeout(function () {
            mail.style.visibility = 'visible';
            adresse.style.visibility = 'visible';    
            tel.style.visibility = 'visible';
        }, 300);
        d --;
    }
});