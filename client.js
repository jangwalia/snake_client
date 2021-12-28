const net = require("net");
const {host,port,myname,msg} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host,
    port
  });
// interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect',()=>{
    console.log('connected to game server');
    
  })
  conn.on('connect',()=>{
    conn.write(`Name: ${myname}`,()=>{
      conn.write(`Say: ${msg}`);
    });
    
    });
  
 
  
  conn.on('data',(data)=>{
    console.log("Snake says: " , data);
  })
  return conn;
};
module.exports = {connect};