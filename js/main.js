let navigationArrows = document.querySelectorAll(".arrow");
const mainImage = document.querySelector(".big");
const one = document.querySelector(".content-one");
const two = document.querySelector(".content-two");
const three = document.querySelector(".content-three");
const paragraphContainer = document.querySelector(".content");
console.log(navigationArrows, mainImage, one, two, three, paragraphContainer);
navigationArrows[0].addEventListener("click", () => {
  navigations("left");
});
navigationArrows[1].addEventListener("click", () => {
  navigations("right");
});
console.log("this is global !",'cases should work');
function navigations(e) {
  let array = getComputedStyle(mainImage);
  let numberPosition = array.backgroundImage.split("");
  console.log(numberPosition)
  globalThis.imgPath = numberPosition.splice(27, numberPosition.length);
  console.log(imgPath)
  let neededText = `url("../`;
  imgPath.unshift(neededText);
  if (e == "left") {
    left();
    console.log("left is working");
  } else {
    console.log("right is working");
    right();
  }
}
function left() {
  console.log("left");
  let newImage = "";
  switch (imgPath[27]) {
    case "1":
      console.log("case 1")
      imgPath[27] = "3";
      newImage = imgPath.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(three);
      break;
      
      case "2":
      console.log("case 2")
      imgPath[27] = "1";
      newImage = imgPath.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(one);
      break;
      
      case "3":
      console.log("case 3")
      imgPath[27] = "2";
      newImage = imgPath.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(two);
      break;

    default:
      break;
  }
}
function right() {
  console.log("right");
  let newImage = "";
  switch (imgPath[27]) {
    case "1":
      console.log("case 1")
      imgPath[27] = "2";
      newImage = imgPath.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(two);
      break;
      
      case "2":
        console.log("case 2")
        imgPath[27] = "3";
        newImage = imgPath.join("");
        mainImage.style.backgroundImage = `${newImage}`;
        paragraphContainer.innerHTML = "";
        paragraphContainer.appendChild(three);
        break;
        
        case "3":
          console.log("case 3")
          imgPath[27] = "1";
      newImage = imgPath.join("");
      mainImage.style.backgroundImage = `${newImage}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(one);
      break;

    default:
      break;
  }
}
