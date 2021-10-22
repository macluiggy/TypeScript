// Accessing the property 'toLowerCase'
// on 'message' and then calling it
var message = 'Hello World!';
message.toLowerCase();
// Calling 'message'
//message();
function fn(x) {
    return x.flip();
}
//undefined propierties
var user = {
    name: 'Daniel',
    age: 26
};
user.name; //user.location daria error al no existir en el objeto user
//typos errors
var announcement = "Hello World!";
// How quickly can you spot the typos?
// announcement.toLocaleLowercase(); daria error al no estar bien escritos
// announcement.toLocalLowerCase(); daria error al no estar bien escritos
// We probably meant to write this...
announcement.toLocaleLowerCase();
//uncalled functions
function flipCoin() {
    return Math.random() < 0.5;
}
// basic logic errors
//esto daria error, ya que en ambos casos se cumple la condicion
if (1 !== 2) {
    console.log('hola');
}
else if (1 === 1) {
    console.log('hola de nuevo');
}
