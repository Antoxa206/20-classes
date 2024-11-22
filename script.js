// User
class User{
    constructor(name, email){
        this.name = name;
        this.email = email; 
    }

    greet(){
        console.log(`Доброго дня , ${this.name}`)
    }
}

//Admin
class Admin extends User{
    constructor(name, email, role){
        super(name, email);
        this.role = role;
    }
   
    GetRole(){
        console.log(`Ваша роль ${this.role}`)
    }
    

}

const myacc = new Admin('Антон', 'lobinskiyanton@gmail.com', 'адмін');
myacc.GetRole();

//Bank
class BankAccaunt {
    #balance = 1000;

    depos() {
        this.#balance += 100;
        console.log(`Теперішній баланс: ${this.#balance}`);
    }

    back() {
        this.#balance -= 100;
        console.log(`Теперішній баланс: ${this.#balance}`);
    }

}

const myBalance = new BankAccaunt();
myBalance.depos();