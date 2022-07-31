export default class Donator {
	#name: string
	#email: string
	#phone: string
	#zip: string
	#city: string
	#state: string
	#streetAddress: string
	#number: string
	#complement: string
	#neighborhood: string
	#deviceCount: string
	#devices: string
	#type: string
	#condition: string

	constructor(
		email: string, 
		name: string,
		phone: string, 
		zip: string, 
		city: string, 
		state: string, 
		streetAddress: string, 
		number: string, 
		complement: string, 
		neighborhood: string, 
		deviceCount: string, 
		devices: string, 
		type: string, 
		condition: string,
		){
			this.#name = name
			this.#email = email
			this.#phone = phone
			this.#zip = zip
			this.#city = city
			this.#state = state
			this.#streetAddress = streetAddress
			this.#number = number
			this.#complement = complement
			this.#neighborhood = neighborhood
			this.#deviceCount = deviceCount
			this.#devices = devices
			this.#type= type
			this.#condition = condition
		}


	get name(){
		return this.#name
	}

	get email(){
		return this.#email
	}

	get phone(){
		return this.#phone
	}

	get zip(){
		return this.#zip
	}

	get city(){
		return this.#city
	}

	get state(){
		return this.#state
	}
	get streetAddress(){
		return this.#streetAddress
	}

	get number(){
		return this.#number
	}
	get complement(){
		return this.#complement
	}
	get neighborhood(){
		return this.#neighborhood
	}
	get deviceCount(){
		return this.#deviceCount
	}
	get devices(){
		return this.#devices
	}
	get type(){
		return this.#type
	}
	get condition(){
		return this.#condition
	}




}