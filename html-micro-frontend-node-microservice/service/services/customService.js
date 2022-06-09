

class CustomService {

	constructor() {
		this.ALERT = "ALERT"
		this.VALID = "OK"
		this.MAX_SIZE = 5
	}
	
	
	getResult(numbers) {		
		try {
			var result = { "status" : this.VALID }

			if(numbers.length > this.MAX_SIZE) {
					result.status = this.ALERT
			}
			
			return result
		} catch(error) {
			console.error(error)
			return error
		}
	}	
}

module.exports = CustomService;