let connection;
const { connect } = require("./client");
const {movement} = require('./constants');
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  for(const move in movement){
    if(key === move){
      connection.write(movement[move]);
    }
  }
};

module.exports = {setupInput};