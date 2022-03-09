// Exercicio 1
//a: O construtor determina que ações devem ser executadas quando da criação de um objeto. Chamamos ele através do metodo Constructor(){}
//b: Somente 1 vez
//c: Propriedades privadas podem ser acessadas somente dentro da própria classe, para ter acesso fora dela é preciso trocar para public

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Array<number> = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  }

  const User1 = new UserAccount("12345678910", "Leonardo", 23);
  console.log(User1)

//Exercicio 2
class Transaction {
   private description: string;
   private value: number;
   private date: string;
   
   constructor(description: string, value: number, date: string) {
      this.description = description
      this.value = value;
      this.date = date; 
   }
 }

//Exercicio 3

class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }

   public getAccounts(){
      return this.accounts
  }

  public setAccounts(accounts:UserAccount[]){
      this.accounts = accounts
  }
 
 }