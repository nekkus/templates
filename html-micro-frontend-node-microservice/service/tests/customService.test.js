
const CustomService = require("../services/customService")

const numbers_small = [1,2,3,4]
const numbers_exact_size = [1,2,3,4,5]
const numbers_exceed = [1,2,3,4,5,6,7,8,9]

describe('Custom Service', () => {

    it('constructs service correctly', () => {
        service = new CustomService()
        expect(service).toBeTruthy()
        expect(service).toBeInstanceOf(CustomService)
    })

    it('Passes if sample size is small', () => {
        service = new CustomService()
        const result = service.getResult(numbers_small)
        expect(result.status).toBe("OK")
    })

    it('Pases if sample matches max size', () => {
        service = new CustomService()
        const result = service.getResult(numbers_exact_size)
        expect(result.status).toBe("OK")
    })

    it('fails if sample is too large', () => {
        service = new CustomService()
        const result = service.getResult(numbers_exceed)
        expect(result.status).toBe("ALERT")
    })
})