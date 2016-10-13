window.onload = function(){
document.getElementById("boundary1").onmouseenter = function() {mouseEnter()};

function mouseEnter() {
    alert("Hey");
   document.getElementById("boundary1").className+=' youlose';
}
};