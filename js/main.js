let navigationArrows = document.querySelectorAll(".arrow");
const mainImage = document.querySelector(".big");
const one = document.querySelector(".content-one");
const two = document.querySelector(".content-two");
const three = document.querySelector(".content-three");
const paragraphContainer = document.querySelector(".content");
// console.log(navigationArrows, mainImage, one, two, three, paragraphContainer);
// const imageRelativPath = `../images/desktop-image-hero-2.jpg`;
// let someShit = `idk this is some shit${imageRelativPath}`;
// console.log(someShit);
// console.log(someShit.split("").splice(-34));

// console.log(imageRelativPath.split("").length);
navigationArrows[0].addEventListener("click", () => {
  navigations("left");
});
navigationArrows[1].addEventListener("click", () => {
  navigations("right");
});
// console.log("this is global !", "cases should work");
function navigations(e) {
  let array = getComputedStyle(mainImage);
  globalThis.numberPosition = array.backgroundImage.split("/");
  globalThis.numberHorder =
    numberPosition[numberPosition.length - 1].split("-");
  globalThis.finalWord = numberHorder[numberHorder.length - 1];
  globalThis.finalWordArray = finalWord.split("");

  if (e == "left") {
    left();
  } else {
    right();
  }
  //-6
}
function left() {
  console.log("left");
  let newNumberHorder;
  switch (finalWordArray[0]) {
    case "1":
      finalWordArray[0] = "3";
      finalWord = finalWordArray.join("");
      console.log(finalWord, finalWordArray);
      numberHorder.pop();
      numberHorder.push(finalWord);
      console.log(numberHorder);
      newNumberHorder = numberHorder.join("-");
      numberPosition.pop();
      numberPosition.push(newNumberHorder);
      console.log(numberPosition);
      imgPath = numberPosition.join("/");
      console.log(imgPath);
      console.log("case 1");
      mainImage.style.backgroundImage = `${imgPath}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(three);
      break;

    case "2":
      finalWordArray[0] = "1";
      finalWord = finalWordArray.join("");
      console.log(finalWord, finalWordArray);
      numberHorder.pop();
      numberHorder.push(finalWord);
      console.log(numberHorder);
      newNumberHorder = numberHorder.join("-");
      numberPosition.pop();
      numberPosition.push(newNumberHorder);
      console.log(numberPosition);
      imgPath = numberPosition.join("/");
      console.log(imgPath);
      console.log("case 1");
      mainImage.style.backgroundImage = `${imgPath}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(one);
      break;

    case "3":
      finalWordArray[0] = "2";
      finalWord = finalWordArray.join("");
      numberHorder.pop();
      numberHorder.push(finalWord);
      newNumberHorder = numberHorder.join("-");
      numberPosition.pop();
      numberPosition.push(newNumberHorder);
      imgPath = numberPosition.join("/");
      console.log(imgPath);
      console.log("case 1");
      mainImage.style.backgroundImage = `${imgPath}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(two);
      break;

    default:
      break;
  }
}
function right() {
  console.log("right");
  let newNumberHorder;
  switch (finalWordArray[0]) {
    case "1":
      finalWordArray[0] = "2";
      finalWord = finalWordArray.join("");
      numberHorder.pop();
      numberHorder.push(finalWord);
      newNumberHorder = numberHorder.join("-");
      numberPosition.pop();
      numberPosition.push(newNumberHorder);
      imgPath = numberPosition.join("/");
      console.log(imgPath);
      console.log("case 1");
      mainImage.style.backgroundImage = `${imgPath}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(two);
      break;

    case "2":
      finalWordArray[0] = "3";
      finalWord = finalWordArray.join("");
      numberHorder.pop();
      numberHorder.push(finalWord);
      newNumberHorder = numberHorder.join("-");
      numberPosition.pop();
      numberPosition.push(newNumberHorder);
      imgPath = numberPosition.join("/");
      console.log(imgPath);
      console.log("case 2");
      mainImage.style.backgroundImage = `${imgPath}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(three);
      break;

    case "3":
      finalWordArray[0] = "1";
      finalWord = finalWordArray.join("");
      numberHorder.pop();
      numberHorder.push(finalWord);
      newNumberHorder = numberHorder.join("-");
      numberPosition.pop();
      numberPosition.push(newNumberHorder);
      imgPath = numberPosition.join("/");
      console.log(imgPath);
      console.log("case 3");
      mainImage.style.backgroundImage = `${imgPath}`;
      paragraphContainer.innerHTML = "";
      paragraphContainer.appendChild(one);
      break;

    default:
      break;
  }
}
