const { pretyped } = require('./constants')

let connection;

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  }

  if(pretyped[input]) {
    connection.write(pretyped[input])
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput};