var database = [
  {
    username: "yanik",
    password: "secret"
  }
];

var newsFeed = [
  {
    username: "Nonu",
    timeline: "So tired of learning..."
  },
  {
    username: "BelieveMaster",
    timeline: "Learning is fun..."
  }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

signIn(userNamePrompt, passwordPrompt);
