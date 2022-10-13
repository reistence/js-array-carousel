// create img array
const imgArray = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

// container
const container = document.querySelector(".items-container");
//thumbnails
const thumbnails = document.getElementById("thumbnails");

for (let i = 0; i <= imgArray.length - 1; i++) {
  const currentImg = imgArray[i];
  const element = `<div class="item">
            <img src="${currentImg}" alt="" />
          </div>`;
  const thumbElement = `<img class="thumb-img" src=${currentImg} alt=""/>`;
  container.innerHTML += element;
  thumbnails.innerHTML += thumbElement;
}

// Starting point img primary
const items = document.getElementsByClassName("item");
let sliderCurrentPosition = 0;
items[sliderCurrentPosition].classList.add("active");
//startingpoint thumbnails
const thumbImg = document.getElementsByClassName("thumb-img");
thumbImg[sliderCurrentPosition].classList.add("active-thumb");

// grab html elements
// btn
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Navigation
// next btn
nextBtn.addEventListener("click", function () {
  console.log(sliderCurrentPosition);

  items[sliderCurrentPosition].classList.remove("active");
  thumbImg[sliderCurrentPosition].classList.remove("active-thumb");

  if (sliderCurrentPosition < imgArray.length - 1) {
    sliderCurrentPosition++;
  } else {
    sliderCurrentPosition = 0;
  }
  items[sliderCurrentPosition].classList.add("active");
  thumbImg[sliderCurrentPosition].classList.add("active-thumb");
});

// prev btn
prevBtn.addEventListener("click", function () {
  console.log(sliderCurrentPosition);
  items[sliderCurrentPosition].classList.remove("active");
  thumbImg[sliderCurrentPosition].classList.remove("active-thumb");

  if (sliderCurrentPosition > 0) {
    sliderCurrentPosition--;
  } else {
    sliderCurrentPosition = imgArray.length - 1;
  }
  items[sliderCurrentPosition].classList.add("active");
  thumbImg[sliderCurrentPosition].classList.add("active-thumb");
});
