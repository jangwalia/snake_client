let connection;
//using destructuring for constant values;
const{keyData} = require('./constants');
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
    //mapping over the object
  }connection.write(keyData[key]);
};
//DEFINING USER INPUT BY CREATING A FUNCTION
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  //creating event handler for stdin
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


module.exports = { setupInput }