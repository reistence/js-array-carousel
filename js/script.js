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
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

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

// Navigation

// next btn
nextBtn.addEventListener("click", function () {
  console.log(sliderCurrentPosition);
  // remove active from current img
  items[sliderCurrentPosition].classList.remove("active");
  // increase sliderCurrentPosition by 1
  sliderCurrentPosition++;
  console.log(sliderCurrenPosition);
  // add active to the new img
  items[sliderCurrentPosition].classList.add("active");
  console.log(items[sliderCurrentPosition]);
});
