const net = require("net");
const { IP, PORT, initial } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('data', (data) => { // 'data' event = receiving data from server
    console.log(data); // Print out server message
  });

  conn.on('connect', () => { // 'connect' event = after connection sucessfull
    console.log('Sucessfully connected to game server'); // Print out message once connection is established
    conn.write(initial); // Set client's name on the server
    // setTimeout(() => conn.write('Move: up'), 1000);
    // setTimeout(() => conn.write('Move: right'), 2000);
    // setTimeout(() => conn.write('Move: up'), 3000);
    // setTimeout(() => conn.write('Move: left'), 4000);
    // setInterval(() => conn.write('Move: up'), 50);
  });


  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };