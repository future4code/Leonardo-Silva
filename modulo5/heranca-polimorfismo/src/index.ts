//HERANÇA
//exercicio 1
//a) Da maneira como está, não é possivel.
//b) 1 vez


class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string {
        return `Olá, bom dia! meu nome é ${this.name}`
     }
  }


  //exercicio 2
  //a) somente 1 vez
  //b) somente 1 vez, pois ele manda para a classe user somente 1 vez e realiza todo o cadastro.

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

    const user1 = new Customer('1','leo@gmail.com','leo','123', '123456778');
    console.log(user1.introduceYourself())

    //exercicio 3
    //a)não, porque não possui um "getter" definido para mostrar o password

    //POLIFORFISMO

    //exercicio1
    //a) ele não imprime o resultado da função

    interface Client {
        name: string;
        // Refere-se ao nome do cliente
      
        registrationNumber: number;
        // Refere-se ao número de cadastro do cliente na concessionária
          // como se fosse um id
      
        consumedEnergy: number;
        // Refere-se à energia consumida pelo cliente no mês
      
        calculateBill(): number;
        // Retorna o valor da conta em reais
    }

    const client: Client = {
        name: "Goli",
        registrationNumber: 1,
        consumedEnergy: 100,
      
        calculateBill: () => {
          return 2;
        }
      }

      console.log(client)

// exercicio 2
//a)não foi possivel criar uma instancia.
//b)não foi possivel pois a classe está como abstract, isso faz com que a classe não possa ser instanciada

abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }