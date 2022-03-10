const calcSeconds = (birthDate) => {
    // let currDay = new Date().getDate();
    let currMonth = new Date().getMonth() + 1;
    let currYear = new Date().getFullYear();
  
    let currDate = `${currMonth} ${currYear}`;
    console.log("this is the current date:", currDate)
    // console.log(currDay)
    console.log("current month:", currMonth)
    console.log("current year:", currYear)
    
    let secsInMonth = 60 * 60 * 24 * 30;
    let secsInYear = secsInMonth * 12;
    console.log("secsInMonth: ", secsInMonth)
    console.log("secsInYear: ", secsInYear)
  
    console.log("this is your birthdate:", birthDate)
    let splitBirth = birthDate.split(" ");
    console.log(splitBirth);
    let birthMonth = Number(splitBirth[0]);
    let birthYear = Number(splitBirth[1]);
  
    console.log("This is the month you were born:", birthMonth);
    console.log("This is the year you were born:", birthYear);
  
    let secsSinceBorn = (secsInMonth * (12 - birthMonth)) + secsInYear + (secsInMonth * currMonth);
    console.log("seconds since you were born:", secsSinceBorn)
    
    // let fullYear = `${currMonth} ${currDay} ${currYear}`;
    // console.log(fullYear)
  }
  calcSeconds("05 1998")