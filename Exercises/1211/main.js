// Array

let arr = ["one", 1, undefined, null, BigInt, 3];
// =======
function arrLength(arr) {
  return arr.length;
}
console.log(arrLength(arr));
// =======
function arrFirstElement(arrReturnFirstElement) {
  return arrReturnFirstElement[0];
}
console.log(arrFirstElement(arr));
// =======
function arrLastElement(arrReturnLastElement) {
  return arrReturnLastElement[arrReturnLastElement.length - 1];
}
console.log(arrLastElement(arr));
// =======
function arrPushElement(arrReturnPushElement) {
  arrReturnPushElement.push("pushElement");
  return arrReturnPushElement;
}
console.log(arrPushElement(arr));
// =======
function arrPopElement(arrReturnPopElement) {
  arrReturnPopElement.pop();
  return arrReturnPopElement;
}
console.log(arrPopElement(arr));
