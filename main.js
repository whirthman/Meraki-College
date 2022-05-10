const slideshowImages = document.querySelectorAll(".intro .slideshow-img");
const nextImageDelay = 5000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity =1;

setInterval(nextImage, nextImageDelay);

function nextImage(){
    slideshowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(() =>{
        slideshowImages[tempCounter].style.opacity=0;
        }, 1000);

    currentImageCounter = (currentImageCounter + 1)% slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity=1;
    slideshowImages[currentImageCounter].style.zIndex=-1;
}

// Javascript code for navigation
let mainNav = document.getElementById("main-nav");
let open = document.getElementById("openBtn");
let close = document.getElementById("closeBtn");

common = (x, y, z) => {
	x.addEventListener("click", ()=> {
		x.classList.toggle("hide");
		y.classList.toggle("hide");

		if (z=="slide-in"){
			mainNav.classList.toggle("slide");
		}
		if (z == "slide-out" ){
			mainNav.classList.toggle("slide");
		}
	})
}

common(open, close, "slide-in");
common(close, open, "slide-out");

// Cards
const card = document.querySelector(".card__inner");
const card2 = document.getElementById("cd2");
const card3 = document.getElementById("cd3");


card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

card2.addEventListener("click", function (e) {
	card2.classList.toggle('is-flipped');
  });

  card3.addEventListener("click", function (e) {
	card3.classList.toggle('is-flipped');
  });






