const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data',(key)=>{
    if(key==='\u0003'){
    
      process.exit();
    }
    handleUserInput();
    
    });
    return stdin;
    }
    module.exports={
      handleUserInput,setupInput
    
    }
