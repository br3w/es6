/**
* Class ES6
* ---------------------
* @author Jonas Andrade
* @since 20/06/2015
*/


/*
Declarando classes
-------------------------------------------------------------------
Uma maneira de definir uma classe é usando uma declaração de classe.
Para declarar uma classe, você deve usar a palavra-chave class
seguida pelo nome da classe (aqui "Retangulo").
*/
class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  }
  
  const a = new Retangulo(10, 10);
  console.log(a);
  
  
  /*
  Expressões de Classes
  ------------------------------------------------------------------
  Uma Expressão de Classe (class expression) é outra forma para
  definir classes. Expressões de Classes podem possuir nomes ou não
  (anônimas). O nome dado para uma expressão de classe é local ao
  corpo da classe.
  */
  
  // Sem nome
  const RetanguloTwo = class {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  };
  
  const b = new RetanguloTwo(10, 10);
  console.log(b);
  
  // Nomeada
  const RetanguloThree = class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  };
  
  const c = new RetanguloThree(10, 10);
  console.log(c);
  
  
  /*
  Métodos Protótipos
  --------------------------------------------------------------------------
  */
  class RetanguloFour {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
  
    get area() {
      return this.calculaArea();
    }
  
    calculaArea() {
      return this.altura * this.largura;
    }
  }
  
  const quadrado = new RetanguloFour(10, 10);
  console.log(quadrado.area);
  
  
  /*
  Métodos Estáticos
  --------------------------------------------------------------------
  A palavra-chave static define um método estático de uma classe.
  Métodos estáticos são chamados sem a instanciação da sua classe e
  não podem ser chamados quando a classe é instanciada. Métodos
  estáticos são geralmente usados para criar funções de utilidades
  por uma aplicação.
  */
  class Ponto {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distancia(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
  
  const p1 = new Ponto(5, 5);
  const p2 = new Ponto(10, 10);
  console.log(Ponto.distancia(p1, p2));
  
  
  /*
  Empacotando com protótipos e métodos estáticos
  -----------------------------------------------------------------
  Quando um método estático ou protótipo é chamado sem um objeto
  "this" configurado (ou com "this" como boolean, string, number,
  undefined ou null), então o valor "this" será undefined dentro da
  função chamada. Autoboxing não vai acontecer. O comportamento será
  o mesmo mesmo se escrevemos o código no modo não-estrito.
  */
  class Animal {
    falar() {
      return this;
    }
  
    static comer() {
      return this;
    }
  }
  
  const obj = new Animal();
  obj.falar(); // Animal {}
  
  const falar = obj.falar;
  falar(); // undefined
  
  Animal.comer(); // class Animal
  const comer = Animal.comer;
  comer(); // undefined
  
  
  /*
  Sub classes com o extends
  ---------------------------------------------------------------------
  A palavra-chave extends é usada em uma declaração de classe, ou em
  uma expressão de classe para criar uma classe como filha de uma outra
  classe.
  */
  class AnimalTwo {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(`${this.nome} emite um barulho.`);
    }
  }
  
  class Cachorro extends AnimalTwo {
    falar() {
      console.log(`${this.nome} latidos.`);
    }
  }
  
  const d = new Cachorro('Mat');
  d.falar();
  
  
  /*
  Species
  -------------------------------------------------------------------------
  Você pode querer retornar um objeto Array na sua classe MinhaArray
  derivada de array. O padrão Species permite a sobrescrita do construtor
  padrão. Por exemplo, quando utilizando um método como map() que retorna
  o construtor padrão, você pode querer que esse método retorne um objeto
  Array ao invés do objeto MinhaArray. O Symbol.species te permite
  fazer isso:
  */
  class MinhaArray extends Array {
    // Sobrescreve species para o construtor da classe pai Array
    static get [Symbol.species]() { return Array; }
  }
  
  const f = new MinhaArray(1, 2, 3);
  const mapped = f.map(x => x * x);
  
  console.log(mapped instanceof MinhaArray); // false
  console.log(mapped instanceof Array); // true
  
  
  /*
  Chamada da classe pai com super
  -----------------------------------------------------------------------
  A palavra-chave (keyword) super é utilizada para chamar funções que
  pertencem ao pai do objeto.
  */
  class Gato {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(`${this.nome} faça barulho.`);
    }
  }
  
  class Leao extends Gato {
    falar() {
      super.falar();
      console.log(`${this.nome} roars.`);
    }
  }
  
  const l = new Leao('Fuzzy');
  l.falar();
  // Fuzzy faça barulho.
  // Fuzzy roars.
  
  
  /*
  Mix-ins
  ----------------------------------------------------------------------
  Subclasses abstratas ou mix-ins são templates para classes. Uma classe
  do ECMAScript pode apenas ter uma classe pai, assim sendo, não é possível
  a classe ter herança múltipla. Para se ter um comportamento similar ao
  de herança múltipla no ECMAScript usa-se mix-ins, uma forma de
  implementar mix-ins é usar um template de subclasse que é uma função
  que instancia uma classe base e retorna uma subclasse extendida desta
  classe base:
  */
  class Humano {
    constructor(nome) {
      this.nome = nome;
    }
  
    andar() {
      return `${this.nome} andou um passo`;
    }
  }
  
  const HumanoFalante = Base => class extends Base {
    falar() {
      return `${this.nome} diz: olá mundo!`;
    }
  };
  
  const HumanoFalanteMixado = Base => class extends Base {};
  const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano));
  const humano = new HumanoFinal('Bill Gates');
  
  console.log(humano.andar());
  console.log(humano.falar());
  