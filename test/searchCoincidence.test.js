
const {searchCoincidence}= require('../controller/searchCoincidence');
const {employees}= require('../controller/employeeInfo');

describe('Test of array with employees schedules', ()=>{

    test('Argument given is an Array', () => {
        expect(Array.isArray(employees)).toBe(true);
    })
    
    test('Array is not null', ()=>{
        expect(searchCoincidence(employees)).not.toBeNull();
    })

   
})