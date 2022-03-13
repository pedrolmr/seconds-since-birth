const calcSeconds = (birthDate) => {
  let currMonth = new Date().getMonth() + 1;
  let currYear = new Date().getFullYear();
  let secsInMonth = 60 * 60 * 24 * 30;
  let secsInYear = secsInMonth * 12;

  let splitBirth = birthDate.split(" ");
  let birthMonth = Number(splitBirth[0]);
  let birthYear = Number(splitBirth[1]);

  let secsInBetween = secsInYear * (currYear - birthYear);
  let secsInBirthYear = secsInMonth * (12 - birthMonth);
  let secsInCurrYear = secsInMonth * currMonth;

  let secsSinceBorn = secsInBetween + secsInBirthYear + secsInCurrYear;

  return `Seconds since you were born: ${secsSinceBorn}`;
};
console.log(calcSeconds("05 1998"));

//
