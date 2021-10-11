const raining = true;
const temperature = 17;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (!raining) {
  console.log("Leave your umbrella at home!");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 14) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

if (temperature < -25|| temperature > 25) {
  console.log("Maybe going outside isn't such a great idea…");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}


if (!raining) {
  console.log("Leave your umbrella at home!");
}
