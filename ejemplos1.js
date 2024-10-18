// function cotilla() {
//     log('Soy ejemplossssssssssss1.js')
// }
// const cotilla = function() {
//     logInfo('Soy ejemplossssssssssss1.js')
// }

logInfo('Cargo ejemplos1.js')
var valor = 0;
function propiedad(value) {
  if(arguments.length) {
    valor = value;
  } else {
    return valor;
  }      
}
function param(a, b) {
  logInfo(`a: ${a}`);
  logInfo(`b: ${b}`);
  logInfo(`parametros: ${arguments.callee.length} argumentos: ${arguments.length}`);
  logInfo(JSON.stringify(arguments));
  
}
function paramReparte({a, b}) {
  logInfo(`a: ${a}`);
  logInfo(`b: ${b}`);
}
function paramDefecto(a = 1, b = 2) {
  logInfo(`a: ${a}`);
  logInfo(`b: ${b}`);
  logInfo(`parametros: ${arguments.callee.length} argumentos: ${arguments.length}`);
  logInfo(JSON.stringify(arguments));
  
}
function avg() {
  var rslt = 0;
  for (var i = 0; i < arguments.length; i++) {
    rslt += arguments[i];
  }
  return arguments.length ? (rslt / arguments.length) : 0;
}
function avg2(n = 0, ...args) {
  var rslt = n;
  for (var i = 0; i < args.length; i++) {
    rslt += arguments[i];
  }
  return arguments.length ? (rslt / (args.length + 1)) : 0;
}

let tab = [10, 20, 30, 40]
let obj = { a: 100, b: 200 }
let fn = avg
fn = param
fn = function(item) { return item * 2 }
fn = item => item * 2
fn = () => 2 * 2
fn = (a, b) => a * b
fn = item => {
  // ...
  return item * 2
}
tab.filter(item => item > 20)
// logInfo(avg2(5, ...tab));
// logInfo(avg(1, 3, 5, 8));
// logInfo(avg(4, 6, 8, 1, 2, 3, 4, 5));
// logInfo(param(...obj));
// logInfo(paramDefecto(7));
//logInfo(paramReparte(obj));
// param(1, 2, 3);
// param(1);
// param();
// logInfo(`propiedad: ${propiedad()}`);
// logInfo(`propiedad: ${propiedad(4)}`)
// logInfo(`propiedad: ${propiedad()}`);
logInfo(fn(4, 6, 8, 1, 2, 3, 4, 5));
logInfo(fn(4, 6, 8, 1, 2, 3, 4, 5));
(function() { 
  var a = 100;
  logInfo(a);
  logInfo('al vuelo')
})()
