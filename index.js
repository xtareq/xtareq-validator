const {Validate} = require('./lib')



let errors = Validate(['email','password:min=6'],{"email":"hellow","password":"123"})

console.log(errors)