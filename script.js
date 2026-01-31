// let result = 75;
// function getGrade(result) {
//   if (result > 25) return "D";
//   else if (result > 50) return "C";
//   else if (result > 75) return "B";
//   else return "A";
// }
// console.log(getGrade);
//
//
//
//

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 33 && score <= 59) {
    return "E";
  } else if (score >= 0 && score <= 32) {
    return "fail";
  } else {
    return "Invalid Marks `X` ";
  }
}
console.log(getGrade(33));
