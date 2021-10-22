const hello:string = 'hello'+3

interface User {
	name: string;
	id: number;
	age: number;
}

/*const user: User = {
	name: 'hayes',
	id: 0,
	age: 20
}*/

class UserAccount {
	name: string;
	id: number;
	age: number

	constructor(name: string, id: number, age: number) {
		this.name = name;
		this.id = id;
		this.age = age
	}
}

const user: User = new UserAccount('Morphy', 1, 1002)

type MyBool = true | false

const MyBool = {}

type WindowStates = "open" | "closed" | "minimized";

interface House {
	WindowStates,
}

let house: House = {
	WindowStates: 'broken'
}

function getLength(obj: string | string[]) {//number no puede ir debido a que length no se puede para ese typo
	return obj.length
}

getLength(['jdjd'])

//generics se usa para los Arrays para indicar que typo de primitivo contiene el mismo
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string} | {names: string}>

let StringArray: StringArray = ['2']; //[2] daria un error al ser un primitivo diferente que string
let NumberArray: NumberArray = [2]; //['2'] por el contrario ahora este daria error ya que se pide un numero como el typo de elemento(s) en el array

// en este solo aceptara como elemento(s) un objeto que contenga la propiedad name o names y que el valor
// de la misma tiene que ser un string, por ejemplo, si ponemos { nombre: 'goku' } nos dara un error ya
// que la propiedad nombre no es una propiedad conocida por el typo, al igual que si ponemos como elemento
// del array un objeto como este: { name: 2 } tambien dara error, aunque la propiedad exista dentro del
// typo, el valor de esta no es un string por ello mostrara un error
let ObjectWithNameArray: ObjectWithNameArray = [{ names: 'ale'}, { name: 'julia' },]


// declarar tus propios typos que usan generics
interface Backpack<Type> { 
	//esto es como crear un objeto que tiene las propiedades add y get
	//el 'objeto' se le puede poner para que uno ponga el typo Obj<Type>
	add: (obj: Type) => void;
	get: () => Type;
	sum: (n1: Type) => Type
}

//esto le dice a typescript que hay una constante que se llama backpack y no necesita saber de
//donde vino, esto solo funcionara en typescript, intenté hacer console.log() en JS y no funciono
declare const backpack: Backpack<number>;

const object = backpack.get()

console.log(object)
backpack.add(23)//como en backpack el typo es number esto esta bien, pero si fuera '23' daria error
backpack.sum(2)//lo mismo aquí

declare const backpack2: Backpack<string>
backpack2.sum('2')//aqui se pone '2' ya que el typo es string

// Strucural Type System
// cuando dos objetos tienen el mismo typo, se considera que ambos tienen la misma forma
interface Point {
	x: number;
	y: number;
}

function logPoint({x, y}: Point) {
	console.log(`${x}, ${y}`)
}

const point = { x: 12, y: 26 }//dado que ambos son numeros y las propiedades estan bien escritas
							   //no es necesario definir el typo point: Point = ..., ya que typescript lo
							   //infiere en la parte donde se pone el argumento
logPoint(point)

//const color = {hex:'#187ABF'}
//logPoint(color)d

class VirtualPoint {
	x: number
	y: number

	constructor(x: number, y: number) {
		this.x =x
		this.y= y
	}
}

const newVPoint = new VirtualPoint(13, 56)//en las clases tampoco es necesario poner la definicion del typo
										  //ya que typscript va a decir que encajan si es que los
										  //argumentos de la clase tienen todas las propiedades requeridas
										  //en este caso que los dos argumentos sean numeros
logPoint(newVPoint)