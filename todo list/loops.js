var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JS",
  "eat Healthy"
];

var todosImportant = [
  "clean room !",
  "brush teeth !",
  "exercise !",
  "study JS !",
  "eat Healthy !"
];

var todosLength = todos.length;

/*=============For Loop=================*/

// for (var i = 0; i < todosLength; i++) {
//   console.log(i);
//   console.log(todos[i]);
//   todos[i] = todos[i] + "!";  // and type todos in console
//   todos.pop(); // to remove all the items in array
// }

/*===============For Each Loop===============*/

// ForEach Loop-takes array and get items in arrays
// todos.forEach(function(todo, i) {
//   // first argument is item_obj/variable , second argument is index
//   console.log(todo, i);
// });

// Other Way
function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

/*=============While Loop=================*/

// while loop
// var counterOne = 10;
// while (counterOne > 0) {
//   console.log("While Counter", counterOne);
//   counterOne--;
// }

/*=============Do While Loop=================*/

//do-while loop (exit control)
// var counterTwo = 10;
// do {
//   console.log("Do-While Counter", counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);
