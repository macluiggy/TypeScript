var hello = 'hello' + 3;
/*const user: User = {
    name: 'hayes',
    id: 0,
    age: 20
}*/
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    return UserAccount;
}());
var user = new UserAccount('Morphy', 1, 1002);
var MyBool = {};
var house = {
    WindowStates: 'broken'
};
function getLength(obj) {
    return obj.length;
}
getLength(['jdjd']);
var StringArray = ['2']; //[2] daria un error al ser un primitivo diferente que string
var NumberArray = [2]; //['2'] por el contrario ahora este daria error ya que se pide un numero como el typo de elemento(s) en el array
// en este solo aceptara como elemento(s) un objeto que contenga la propiedad name o names y que el valor
// de la misma tiene que ser un string, por ejemplo, si ponemos { nombre: 'goku' } nos dara un error ya
// que la propiedad nombre no es una propiedad conocida por el typo, al igual que si ponemos como elemento
// del array un objeto como este: { name: 2 } tambien dara error, aunque la propiedad exista dentro del
// typo, el valor de esta no es un string por ello mostrara un error
var ObjectWithNameArray = [{ names: 'ale' }, { name: 'julia' },];
var object = backpack.get();
console.log(object);
backpack.add(23); //como en backpack el typo es number esto esta bien, pero si fuera '23' daria error
backpack.sum(2); //lo mismo aquí
backpack2.sum('2'); //aqui se pone '2' ya que el typo es string
function logPoint(_a) {
    var x = _a.x, y = _a.y;
    console.log(x + ", " + y);
}
var point = { x: 12, y: 26 }; //dado que ambos son numeros y las propiedades estan bien escritas
//no es necesario definir el typo point: Point = ..., ya que typescript lo
//infiere en la parte donde se pone el argumento
logPoint(point);
//const color = {hex:'#187ABF'}
//logPoint(color)d
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56); //en las clases tampoco es necesario poner la definicion del typo
//ya que typscript va a decir que encajan si es que los
//argumentos de la clase tienen todas las propiedades requeridas
//en este caso que los dos argumentos sean numeros
logPoint(newVPoint);
