let navigationArrows = document.querySelectorAll(".arrow");
const mainImage = document.querySelector(".big");
const one = document.querySelector(".content-one")
const two = document.querySelector(".content-two")
const three = document.querySelector(".content-three")
const paragraphContainer = document.querySelector(".content")
navigationArrows[0].addEventListener("click", () => {
  navigations("left");
});
navigationArrows[1].addEventListener("click", () => {
  navigations("right");
});

function navigations(e) {
  let array = getComputedStyle(mainImage);
  let numberPosition = array.backgroundImage.split("");
  globalThis.Url = numberPosition.splice(27, numberPosition.length);
  let neededText = `url("../`;
  Url.unshift(neededText);
  e == "left" ? left() : right();
}
function left() {
  let newImage = "";
  switch (Url[27]) {
    case "1":
      Url[27] = "3";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = '';
      paragraphContainer.appendChild(three)
      break;

    case "2":
      Url[27] = "1";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = '';
      paragraphContainer.appendChild(one)
      break;

    case "3":
      Url[27] = "2";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = '';
      paragraphContainer.appendChild(two)
      break;

    default:
      break;
  }
}
function right() {
  let newImage = "";
  switch (Url[27]) {
    case "1":
      Url[27] = "2";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = '';
      paragraphContainer.appendChild(two)
      break;

    case "2":
      Url[27] = "3";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = '';
      paragraphContainer.appendChild(three)
      break;

    case "3":
      Url[27] = "1";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = '';
      paragraphContainer.appendChild(one)
      break;

    default:
      break;
  }
}
