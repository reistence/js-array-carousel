// create img array
const imgArray = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];
// grab html elements
// btn

// container
const container = document.querySelector(".items-container");

for (let i = 0; i <= imgArray.length - 1; i++) {
  const currentImg = imgArray[i];
  const element = `<div class="item">
            <img src="${currentImg}" alt="" />
          </div>`;
  container.innerHTML += element;
}

// Starting point
const items = document.getElementsByClassName("item");
let sliderCurrentPosition = 0;
items[sliderCurrentPosition].classList.add("active");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
// Navigation

// next btn
nextBtn.addEventListener("click", function () {
  console.log(sliderCurrentPosition);
  if (sliderCurrentPosition < imgArray.length) {
    // remove active from current img
    items[sliderCurrentPosition].classList.remove("active");
    // increase sliderCurrentPosition by 1
    sliderCurrentPosition++;
    // add active to the new img
    items[sliderCurrentPosition].classList.add("active");
    console.log(items[sliderCurrentPosition]);
  }
  console.log(sliderCurrentPosition);
  if (sliderCurrentPosition >= imgArray.length - 1) {
    // remove active from current img
    items[sliderCurrentPosition].classList.remove("active");
    // bring back sliderCurrentPosition to 0
    sliderCurrentPosition = 0;
    // add active to the new img
    items[sliderCurrentPosition].classList.add("active");
    console.log(items[sliderCurrentPosition]);
  }
  console.log(sliderCurrentPosition);
});

// prev btn
prevBtn.addEventListener("click", function () {
  console.log(sliderCurrentPosition);
  if (sliderCurrentPosition > 0) {
    // remove active from current img
    items[sliderCurrentPosition].classList.remove("active");
    // increase sliderCurrentPosition by 1
    sliderCurrentPosition--;

    // add active to the new img
    items[sliderCurrentPosition].classList.add("active");
    console.log(items[sliderCurrentPosition]);
  }
});
