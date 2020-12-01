const net = require('net');
const connect = function() {
   
  const conn = net.createConnection({ 
    host: '192.168.0.22 ',
    port: 50541
  });
  // interpret incoming data as text
conn.setEncoding('utf8'); 
conn.on('connect',()=>{

console.log("Successfully connected to game server");
});

conn.on('connect',()=>{
conn.write("Name: MAS");
});

conn.on('connect',()=>{
  conn.write("Move: up");
  });
  conn.on('connect',()=>{
    conn.write("Move: right");
    });

    
  conn.on('date',(data)=>{
    console.log("Server says:,data");
    });

  return conn;
}
module.exports=connect;
