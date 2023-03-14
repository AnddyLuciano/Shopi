const nav = document.getElementById('navbar');
const bar = document.getElementById('mobile-bar');

function barClicked(){
    nav.classList.add("active");
}
function closeClicked(){
    nav.classList.remove("active");
}