window.onload = function () {heroAnimation()}
window.onscroll = function() {showNavigationBackground(), followElements(), codeFrameChecker()}


//VIEWPORT CONTROL
var viewportWidth = window.innerWidth
function resizeControl() {
	viewportWidth = window.innerWidth
	console.log(viewportWidth)
}


// HERO ANIMATION ON LOAD
function heroAnimation() {
	let heroHeadline = document.querySelector(".hero-headline")
	heroHeadline.style.animation = "scale-from-nowhere 2s 1s forwards, change-opacity 2s 1s forwards"
	heroHeadline.style.visibility = "visible"
}

// ANIMATION TIMING
animatedElements = [
	aboutMiddle = {
		element : document.querySelector(".middle img"),
		animation: "scale-from-nowhere 2s forwards, change-width 2s forwards",
		position: 700,
		responsive: true,
		positionChecker: function() {
			return this.element.getBoundingClientRect().top
		}
	},
	aboutHandWave = {
		element : document.querySelector("i.wave"),
		animation: "rotate-hand 0.4s 20 forwards",
		position: 500,
		responsive: true,
		positionChecker: function() {
			return this.element.getBoundingClientRect().top
		}
	},
	ecommerceImage = {
		element : document.querySelector(".ecommerce-right img"),
		animation: "slide-left 2s forwards, roll-into 2s forwards",
		position: 500,
		responsive: false,
		positionChecker: function() {
			return this.element.getBoundingClientRect().top
		}
	},
	marketingLogo = {
		element : document.querySelector(".marketing-left img"),
		animation: "rotate-shake 0.2s 2 forwards",
		position: 500,
		responsive: true,
		positionChecker: function() {
			return this.element.getBoundingClientRect().top
		}
	}

]

function followElements() {
	for (elem of animatedElements) {
		if (elem.responsive == true && elem.positionChecker() < elem.position) {
			elem.element.style.animation = elem.animation
		} else if (viewportWidth > 1025 && elem.positionChecker() < elem.position) {
			elem.element.style.animation = elem.animation
		}
	}
}


//NAVBAR BACKGROUND AFTER SCROLL
function showNavigationBackground() {
	if (document.documentElement.scrollTop > 500) {
		document.querySelector("nav").className = "scrolled";
	  } else {
		document.querySelector("nav").className = "";
	  }
}


// SECTION COURSES
$(document).ready(function() {
	$('.carousel').carousel();
});


// SECTION MY-CODES
function typewriterEfect() {
	let frame = document.querySelectorAll('.line')
	let i = 1
	let totalDelay = 0
	let multiplier = 0.03
	for (line of frame) {
		if (i < frame.length) {
			if (i != 1) {
				line.style.setProperty('--delay', `${totalDelay + 1.5}s`)
				line.style.setProperty('--start', `${totalDelay}s`)
			}
			line.style.setProperty('--duration', `${line.innerText.length * multiplier}s`)
			line.style.setProperty('--steps', `${line.innerText.length}`)
			totalDelay = totalDelay + 1.7 + (line.innerText.length * multiplier);
		} else {
			line.classList.remove('line')
			line.classList.add('last-line')
			line.style.setProperty('--delay', `${totalDelay}s`)
		}
		i++
	}
}
typewriterEfect()


function codeFrameChecker(){
	let codesHeadline = document.querySelector(".codes-container")
	let codeFrame = document.querySelector(".code-frame")
	if (viewportWidth > 640 && codesHeadline.getBoundingClientRect().top < 300) {
		codeFrame.style.display = "block"
	} else if (viewportWidth <= 640 && codesHeadline.getBoundingClientRect().top < 500) {
		codeFrame.style.display = "block"
	} else if (viewportWidth <= 768 && codesHeadline.getBoundingClientRect().top < 600) {
		codeFrame.style.display = "block"
	} else if (viewportWidth <= 900 && codesHeadline.getBoundingClientRect().top < 700) {
		codeFrame.style.display = "block"
	} else if (viewportWidth <= 1024 && codesHeadline.getBoundingClientRect().top < 900) {
		codeFrame.style.display = "block"
	} 
}


//CONTACTS
// A) Contacts carousel
$(".planet").click(function() {
	$('.container').attr("planet-center", this.id);
	if (this.id == "planet1") centerPlanet1();
	if (this.id == "planet2") centerPlanet2();
	if (this.id == "planet3") centerPlanet3();
 
 });
 
 
 function centerPlanet1() { 
	var tl = new TimelineMax()
	.to('#planet1', 1, {xPercent: 0, z: 1}, 0)
	.to('#planet2', 1, {xPercent: 140, z: -800}, 0)
	.to('#planet3', 1, {xPercent: -140, z: -800}, 0)
	
 }
 
 function centerPlanet2() {
	var tl = new TimelineMax()
	.to('#planet1', 1, {xPercent: -140, z: -800}, 0)
	.to('#planet2', 1, {xPercent: 0, z: 1}, 0)
	.to('#planet3', 1, {xPercent: 140, z: -800}, 0);
 }
 
 function centerPlanet3() {
	var tl = new TimelineMax()
	.to('#planet1', 1, {xPercent: 140, z: -800}, 0)
	.to('#planet2', 1, {xPercent: -140, z: -800}, 0)
	.to('#planet3', 1, {xPercent: 0, z: 1}, 0);
 }
 
 
 $(function() {
   centerPlanet2();
 })

 //B) Email visibility
 function showEmail() {
	let email = document.querySelector("a.email")
	email.classList.toggle("invisible")
 }

 

 