const net = require("net");
//declaring connect function
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  //get a msg from server when connected
  conn.on('data',(data)=>{
    console.log(data);
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
}
//exporting connect function
module.exports = {connect}