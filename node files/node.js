/*function greetings(name) {
    console.log(`Hello ${name}. Welcome to Node.js`);
}
greetings("Elza");
console.log(`Process Platform:${process.version}`);*/
//console.log("Greetings"); //Global Scope
//window.console.log("Browser");//browser environment
//globalThis.console.log("Node");
//var name = "Gokul";
//console.log(name);
//console.log(global.name);
//var chalk = require("chalk");
var messenger = require("./messenger");
messenger.printer("Elza");


//console.log(chalk.blue('Hello world!'));