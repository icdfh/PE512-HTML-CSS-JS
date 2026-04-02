// class User {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     login(){
//         console.log(this.name + " " + "logged in")
//     }
// }

// const user1 = new User("Alex", "alex@gmail.com")
// console.log(user1.name)
// console.log(user1.email)
// user1.login()
// console.log(user1)

class Bank{
    #balance = 0;

    deposit(amount){
        if(amount <= 0) return
        this.#balance += amount
    }
    withdraw(amount){
        if(amount > this.#balance){
            console.log("Error")
            return
        }
        this.#balance -= amount
    }

    getBalance(){
        return this.#balance
    }
}

const acc1 = new Bank()
console.log(acc1.getBalance())
acc1.deposit(5000)
console.log(acc1.getBalance())
acc1.withdraw(3000)
console.log(acc1.getBalance())
