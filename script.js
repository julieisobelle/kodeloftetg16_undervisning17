// JavaScript Conditional (Betingelse)

// if/else statement (enten/eller påstand)

const userAge = 20;
// if(if/else statement) userAge(variable name) is bigger(>) or the same(=) as 18(variable value)
if (userAge >= 18) {
  // Log this message
  console.log("User is over 18");
} else {
  // else if NOT userAge is bigger or same as 18
  // Log this message
  console.log("User is under 18");
}

// if userAge is lesser then 18
if (userAge < 18) {
  console.log("User is under 18");
} else if (userAge === 18) {
  // userAge is same datatype and value as 18
  console.log("User is exactly 18");
} else {
  // userAge is more then 18
  console.log("User is over 18");
}

//
//

const userName = "Julie";
const clock = 1010;

if (clock === 930) {
  console.log("Oppmøte på Kodeloftet");
} else if ((clock >= 1000 && clock <= 1059) || (clock >= 1111 && clock <= 1159)) {
  console.log("Undervisning pågår");
} else if (clock === 1100 && clock <= 1110) {
  console.log("Pause i undervisning");
} else {
  console.log("Undervisning er over");
}

//
//

const loginButton = document.querySelector("#loginButton");
console.log(loginButton);

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Manglet .value for å hente verdi og ikke element
  const userEmail = document.querySelector("#userEmail").value;
  console.log(userEmail);

  // Manglet .value for å hente verdi og ikke element
  const userPassword = document.querySelector("#userPassword").value;
  console.log(userPassword);

  // Manglet ! for å sjekke om noe IKKE finnes
  if (!userEmail == "" || !userPassword == "") {
    console.log("Data utfylt er: " + userEmail + " " + userPassword);
  } else {
    console.log("Something went wrong");
    console.error("Something wrong:");
  }
});
