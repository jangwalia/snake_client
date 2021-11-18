const net = require("net");
//declaring connect function
const myfunc = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding("utf8");
  //get a msg from server when connected
  conn.on('connect',() => {
    console.log('successfully connected to the server');
    conn.write("Name: JSW");
  })
  //TRYING HARD CODED MOVE COMMANDS
  // conn.on('connect',()=>{
  //   setInterval(()=>{
  //     conn.write('Move: up');
  //     conn.write('Move: right')
  //   },50)
  // });
  conn.on('data',(data)=>{
    console.log("server says :", data);
  })
  // interpret incoming data as text
  
  return conn;
}
//exporting connect function
module.exports = {myfunc}