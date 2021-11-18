const host = "localhost";
const port = 50541;
const msg = "Successfuly Connected";
const username = "Name: JSW";
//sending directions as an object
const keyData = {
  w : "Move: up",
  a : "Move: left",
  s : "Move: down",
  d : "Move: right",
  z : "Say: Hello"
}
module.exports = {
  host,
  port,
  msg,
  username,
  keyData
}