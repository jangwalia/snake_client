const net = require("net");
const {host,port,msg,username} = require('./constants');
//declaring connect function
const myfunc = () => {
  const conn = net.createConnection({
    host: host,
    port: port
  });
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log(msg);
    conn.write(username);
  })
  //get a msg from server when connected
  conn.on('data', (data) => {
    console.log("server says :", data);
  })
  // interpret incoming data as text

  return conn;
}
//exporting connect function
module.exports = { myfunc }