// var countSheep = function (num) {
//   let counterSheep = "";
//   if (num === 0) {
//     return "";
//   } else {
//     for (let i = 1; i <= num; i++) {
//       counterSheep += `${i} sheep...`;
//     }
//   }
//   return counterSheep;
// };
// console.log(countSheep(0));

// ========================================= ===================== \\

// function defineSuit(card) {
//   if (card.includes("♣")) {
//     return "clubs";
//   } else if (card.includes("♦")) {
//     return "diamonds";
//   } else if (card.includes("♥")) {
//     return "hearts";
//   } else if (card.includes("♠")) {
//     return "spades";
//   }
// }
// console.log(defineSuit("3♦"));

// ========================================= ===================== \\

// function strCount(str, letter) {
//   let counter = 0;
//   let regExp = new RegExp(letter, "g");
//   let result = str.match(regExp);
//   if (result) {
//     counter += result.length;
//   }
//   return counter;
// }
// console.log(strCount("", "z"));
