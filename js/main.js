let navigationArrows = document.querySelectorAll(".arrow");
const mainImage = document.querySelector(".big");

navigationArrows[0].addEventListener("click", () => {
  navigations("left");
});
navigationArrows[1].addEventListener("click", () => {
  navigations("right");
});

function navigations(e) {
  console.log(e);
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
      break;

    case "2":
      Url[27] = "1";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      break;

    case "3":
      Url[27] = "2";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
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
      break;

    case "2":
      Url[27] = "3";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      break;

    case "3":
      Url[27] = "1";
      newImage = Url.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      break;

    default:
      break;
  }
}
