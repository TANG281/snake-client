const { connect } = require('./client');

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  stdin.on('data', handleUserInput);

  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();

