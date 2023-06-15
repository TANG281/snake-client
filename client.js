const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to game server');
    conn.write('Name: TNG')
  });


  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };