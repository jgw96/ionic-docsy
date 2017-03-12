const yargs = require('yargs')
   .usage('Usage: $0 -component [component name]')
	 .demandOption('component')
	 .argv;
const opn = require('opn');
const process = require('process');

if (yargs.component) {
	console.log(`Opening docs for ${yargs.component} in your default browser`);
	opn(`https://ionicframework.com/docs/v2/components/#${yargs.component}`);
	process.exit(0);
}
