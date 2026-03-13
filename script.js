(function(){
emailjs.init("Nv_xbLQRWKWi5Xef4");
})();

/* typing effect */

const text="Data Analyst";
let i=0;

function typing(){
if(i<text.length){
document.querySelector(".typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,100);
}
}

typing();

/* scroll reveal */

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=150;

if(elementTop<windowHeight-visible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",reveal);

/* theme */

function toggleTheme(){

document.body.classList.toggle("light");

localStorage.setItem(
"theme",
document.body.classList.contains("light") ? "light" : "dark"
);

}

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light");
}

/* hero fade */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

if(window.scrollY > 120){
heroImage.classList.add("fade");
}else{
heroImage.classList.remove("fade");
}

});

/* emailjs */

document.getElementById("contact-form")
.addEventListener("submit", function(event){

event.preventDefault();

emailjs.sendForm(
"service_jdi4lzg",
"template_fcuxany",
this
).then(function(){

alert("Message sent successfully!");

}, function(error){

alert("Failed to send message");

});

});