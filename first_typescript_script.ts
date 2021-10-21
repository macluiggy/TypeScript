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

function getLength(obj: string | string[] | number[] | object[]) {//number no puede ir debido a que length no se puede para ese typo
	return obj.length
}

getLength(['jdjd', 'eue4'])