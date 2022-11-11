// Parse nice int from char problem

function getAge(inputString) {
  return parseInt(inputString);
}
console.log(getAge(4));

// Write the "square"-function here

function square(number) {
  return number ** 2;
}
console.log(square(100));

// Safen User Input Part I - htmlspecialchars

//https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript
function htmlspecialchars(formData) {
  for (let i in formData) {
    if (formData.includes("<")) {
      return formData.replaceAll("<", "&lt");
    }
    if (formData.includes(">")) {
      return formData.replaceAll(">", "&lt");
    }
    // if (formData.includes(">")) {
    //   return formData.replaceAll(">", "&gt");
    // }
    // if (formData[i] == '"') {
    //   return formData.replace('"', "&quot");
    // }
    // if (formData[i] == "&") {
    //   return formData.replace("&", "&amp");
    // }
  }
}
console.log(htmlspecialchars("<h2>Hello World</h2>"));

// <  &lt;
// >  &gt;
// "  &quot;
// &  &amp;
