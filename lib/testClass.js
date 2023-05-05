
class User{
    constructor(name, id, email){

    }
    greeting(){

    }
}

class Employee extends User{
constructor(name, id, email, parking){

}
}

class Admin extends User{
    constructor(name, id, email, budget){

    }
    settleBudget(){

    }
}

const vinnie =  new Admin('Vinnie', 1, 'test@test.com', 250000)
const court =  new User('Courtney', 2, 'test1@test1.com')

// const vinnie = {
//     name: 'Vinnie', 
//     id: 1,
//     email: 'test@test.com',
//     budget: 250000,
//     greeting: function(){

//     }, 
//     settleBudget: function(){

//     }
// }