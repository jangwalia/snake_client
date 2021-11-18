const {myfunc} = require('./client');
const{setupInput} = require('./input');
// establishes a connection with the game server
//calling the function using destructuring 
console.log('connecting....')
let conn = myfunc();
setupInput(conn);
