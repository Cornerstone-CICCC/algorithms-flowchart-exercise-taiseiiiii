const studentName = "Taisei";
const marks = 100;

let grade = "No Grade";

if (marks >= 80) {
  grade = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 40) {
  grade = "C";
}

console.log(`StudentName: ${studentName}`);
console.log(`Marks: ${marks}`);
console.log(`Grade: ${grade}`);
