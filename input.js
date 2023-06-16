let connection;

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  }
  if (input === 'w') {
    connection.write('Move: up');
  }
  if (input === 'a') {
    connection.write('Move: left');
  }
  if (input === 's') {
    connection.write('Move: down');
  }
  if (input === 'd') {
    connection.write('Move: right');
  }
  if (input === 'p') {
    connection.write('Say: Hi');
  }
  if (input === 'o') {
    connection.write('Say: Network is hard');
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