var database = [
  {
    username: "yanik",
    password: "secret"
  },
  {
    username: "nonu",
    password: "1998"
  },
  {
    username: "bm",
    password: "2103"
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

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }

  /*====Simple understanding of array index====*/
  // if (username === database[0].username && password === database[0].password) {
  //   console.log(newsFeed);
  // } else {
  //   alert("Sorry, wrong username and password");
  // }
}

signIn(userNamePrompt, passwordPrompt);
