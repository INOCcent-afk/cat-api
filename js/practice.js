////////////////////////  looop 1 to 10
//  for (let i = 1; i < 11; i++) {
//      console.log(i);
//  }

////////////////////////  loop 1 to 100 odd numbers
// for(let i = 1; i < 101; i+= 2) {
//     console.log(i);
// }

////////////////////////  multiplation table of 7
// for (let i = 1; i < 11; i++) {
//     let output = i * 7;

//     console.log(`${i} + 7 = ${output}` )
// }

////////////////////////  All multiplation table
// for (let j = 1; j < 11; j++) {

//     for (let i = 1; i < 11; i++) {
//         let output = i * j;
//         console.log(`${i} * ${j} =  ${output}`)
//         if (i === 10) {
//             console.log("");
//         }

//     }
// }

////////////////////////// calculate sum of numbers from 1 - 10
// let sum = 0;

// for (let i = 0; i <= 10; i++) {
//         sum += i;
// }
// console.log(sum);

/////////////////////////// power of 10
// let calc = 1;

// for ( let i = 1; i <=10; i++) {
//      calc *= i;
// }

// console.log(calc)

///////////////////////////// calculate sum of odd numbers greater than 10 < 30
// let sum = 0;

// for (let i = 11; i <= 30; i += 2) {
//     sum += i;
// }

// console.log(sum);

//////////////////////// FUNCTION CONVER CELCIUS TO FARENHEIT
// function calc(n)  {

//     let output = (n * 1.8) + 32;
//     console.log(output);
// }

// calc(2)

//////////////////////// FUNCTION CONVER FARENHEIT TO CELCIUS
// function calc(n) {

//     let output = (n -32) * 5/9

//     console.log(output);
// }

// calc(40);

//////////////////////// Calculate the sum of numbers in an array of numbers
// function arrayCalc(array) {
//   let sum = 0;

//   array.forEach((ar) => {
//     sum += ar;
//   });

//   console.log(sum);
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrayCalc(nums);

///////////////////////////// Coding challenge #11: Calculate the average of the numbers in an array of numbers
// function averageArray(n) {
//   let output = 0;

//   for (let i = 0; i < n.length; i++) {
//     output += n[i];
//   }
//   let answer = output / n.length;

//   console.log(answer);
// }

// let array = [2, 3, 4, 5, 6, 7, 1, 2];

// averageArray(array);

///////////Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function stayPositive(n) {
//   let output = [];
//   let num = n.length;

//   for (let i = 0; i < n.length; i++) {
//     if (n[i] > 0) {
//       output.push(n[i]);
//     }
//   }
//   console.log(output);
// }

// let array = [2, 3, 4, 5, 6, 7, -8, -9];
// stayPositive(array);

// Coding challenge #13: Find the maximum number in an array of numbers

// function maxNumber(n) {
//   let output = 0;

//   for (let i = 0; i < n.length; i++) {
//     output = Math.max(n[i]);
//   }
//   console.log(output);
// }

// let array = [1, 2, 3, 4, 5, 65, 6, 123213];
// maxNumber(array);

////Print the first 10 Fibonacci numbers without recursion

// let f0 = 0;

// let f1 = 1;

// for (let i = 2; i < 10; i++) {
//   let fi = f0 + f1;
//   console.log(fi);

//   f0 = f1;
//   f1 = fi;
// }

// ////Write a JavaScript program to remove items from a dropdown list
// const btn = document.querySelector(".btn");
// const colorSelect = document.getElementById("colorSelect");

// function removeColor() {
//   colorSelect.remove(colorSelect.selectedIndex);
// }

// btn.addEventListener("click", removeColor);

// Write a JavaScript program to count and display the items of a dropdown list, in an alert window
// const options = document.querySelectorAll("option");

// function getOptions() {
//   options.forEach((opt) => {
//     let value = opt.innerText;
//     alert(value);
//   });
// }

// Write a JavaScript program to display a random image (clicking on a button) from the following list.

// "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";

// function getImage() {
//   const div = document.querySelector(".div");
//   const src1 =
//     "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
//   let img1 = document.createElement("img");
//   img1.src = src1;

//   const src2 = "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
//   let img2 = document.createElement("img");
//   img2.src = src2;

//   const src3 = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";
//   let img3 = document.createElement("img");
//   img3.src = src3;

//   div.appendChild(img1);
//   div.appendChild(img2);
//   div.appendChild(img3);
// }

// document.querySelector("button").addEventListener("click", getImage);

// Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link. Go to the editor
// const bold = document.querySelectorAll("span");
// const container = document.querySelector("div");

// function getBold() {
//   bold.forEach((bo) => {
//     bo.style.fontWeight = "bold";
//   });
// }
// function outBold() {
//   bold.forEach((bo) => {
//     bo.style.fontWeight = "normal";
//   });
// }

// container.addEventListener("mouseenter", getBold);
// container.addEventListener("mouseleave", outBold);

// Write a JavaScript program to get the width and height of the window (any time the window is resized)

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
// });

const search = document.getElementById("search");
const btn = document.querySelector("button");
const cat = document.querySelector(".Cat");

function getMovie() {
  //   const input = search.value;

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      const img = document.createElement("img");
      img.style.height = "300px";
      img.style.width = "300px";
      img.style.objectFit = "cover";
      const src = data[0]["url"];
      img.src = src;
      cat.appendChild(img);
    })
    .catch((err) => console.log(err));

  //   search.value = "";
}
btn.addEventListener("click", getMovie);
