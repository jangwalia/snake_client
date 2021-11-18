let connection;
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
}
//DEFINING USER INPUT BY CREATING A FUNCTION
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  //creating event handler for stdin
  stdin.on("data", handleUserInput);
  stdin.on("data", snakeMovement);
  stdin.on("data",chat);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const chat = function(key){
  if(key === 'z'){
    connection.write("Say: hello");
  }
  
}

const snakeMovement = function (key) {

  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "d") {
    connection.write("Move: right");
  }
};
module.exports = { setupInput }