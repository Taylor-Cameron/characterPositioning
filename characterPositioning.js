
function letterInd(string) {
  var finalObject = {};

  var lower = string.toLowerCase();
  for(var i = 0; i < lower.length; i++) {
    letter = lower[i];
    if(!finalObject[letter]) {
      finalObject[letter] = [i];
    } else {
      finalObject[letter].push(i);
    }

}
  console.log(finalObject);
}
letterInd('lighthouse in the house');
// what my output should look like
// {
//   l: 0
//   i: 1, 11
//   g: 2
//   h: 3, 5, 15, 18
//   t: 4, 14
//   o: 6, 19
//   u: 7, 20
//   s: 8, 21
//   e: 9, 16, 22
//   n: 12
// }