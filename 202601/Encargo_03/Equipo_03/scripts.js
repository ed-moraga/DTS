// Script sacado de la ayudantia (Un par de licencias creativas me di para modificarlo)

var btn = document.getElementById("btnBTT");

window.onscroll = function() {scroll();}

function scroll() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        btn.style.display = "block";
     //   alert("HEY")
    } else {
        btn.style.display = "none";
    }
}

function goUp() { //codigo obtenido de google 
    window.scrollTo({
    top: 0, 
    left: 0,  
    behavior: 'smooth' 
});
}