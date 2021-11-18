const {myfunc} = require('./client');
// establishes a connection with the game server
//calling the function using destructuring 
const handleUserInput = function (key) {
  if(key === '\u0003'){
    process.exit();
  }
};
//DEFINING USER INPUT BY CREATING A FUNCTION
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //creating event handler for stdin
  stdin.on("data", handleUserInput);
  return stdin;
};
myfunc();
setupInput();
