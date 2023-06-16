const { pretyped } = require('./constants');

let connection;

const handleUserInput = (input) => {
  if (input === '\u0003') { // Ctrl + c to exit the app
    process.exit();
  }

  if (pretyped[input]) { // Send message to server if the input is included in the pretyped object
    connection.write(pretyped[input]);
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

module.exports = { setupInput };