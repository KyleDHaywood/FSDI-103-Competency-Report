/* let num1 = prompt("First number ");
let num2 = prompt("Second number ");

let numCheck = () => {
  if (num1 < num2) {
    console.log(`${num2} is greater than ${num1}`);
  } else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else if ((num1 = num2)) {
    console.log(`${num1} is equal to ${num2}`);
  } else {
    alert("Houston we have a problem");
  }
};

numCheck();
*/

let students = ["Brett", "Ray", "Kyle", "Jasmine", "Jadro", "Nick", "Jazmin"];
let grades = ["A", "B", "A-", "B-", "A", "A+", "C"];

let display = () => {
  for (let i = 0; i < students.length; i++)
    if (i < students.length) {
      document.write(`<p>Name:${students[i]}    Grade:${grades[i]}<p>`);
    }
};
display();
