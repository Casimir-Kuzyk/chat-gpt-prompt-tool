// first, let's make a terminal command

const { Command } = require('commander');

const program = new Command();

program
  .command('mycommand <arg1> <arg2> <arg3>')
  .description('A custom command that accepts 3 arguments')
  .action((arg1, arg2, arg3) => {
    console.log(`Arguments: ${arg1}, ${arg2}, ${arg3}`);
  });

program.parse(process.argv);
