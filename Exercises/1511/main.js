// sumStrings

function sumStrings(a, b) {
  x = Number(a);
  y = Number(b);
  return (BigInt(x) + BigInt(y)).toString();
}
console.log(sumStrings("1", "2"));
