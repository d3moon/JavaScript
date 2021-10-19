//this Keyword 
//Faz referência ao próprio objeto criado na função construtora

//Ex1:

// function Carro(marca, precoInicial){
//   this.taxa = 1.2
//   const precoFinal = precoInicial * this.taxa

//   this.marca = marca
//   this.preco = precoFinal
//   console.log(this)

// }

// const carro = new Carro('Ferrari', 4000)

////////////////////////////////


//Ex2:
 
//Sem função construtora
// const Dom1 = {
//   seletor: 'li',
//   element(){
//     return document.querySelector(this.seletor)
//   },

//    ativar(){
//     const select = this.element()
//      select.classList.add('Dom1')
//   }
// }


// console.log(Dom1.element());
// console.log(Dom1.ativar());



//Com função construtora ou classes
// class Dom2{
//   constructor(seletor){

//   this.element = function() {
//     return document.querySelector(seletor);
//   },

//   this.ativar = function() {
//    const select = this.element();
//    select.classList.add('Dom2');
//   }
// }
// };

// const ul = new Dom2('ul')
// const activite = ul.ativar()
 
////////////////////////////////


//Exercicios

//1:

//Transforme o objeto abaixo em Constructor Function

// const pessoa = {
//   nome: 'Tate',
//   idade: 19,

//   andar(){
//     console.log(this.nome + 'andou')
//   }
// }

// class Personal{
//   constructor(nome,idade){
//     this.nome = nome;

//     this.andou = ()=>{
//       return console.log(nome + ' andou')
//     }
//   }
// }

// const joao = new Personal("Joao", 20)
//            joao.andou()
// const maria = new Personal("Maria", 25);
//            maria.andou();
// const bruno = new Personal("Bruno", 15);
//             bruno.andou();

////////////////////////////////


//2:

//Crie uma função construtora com as seguites propriedades e métodos:
//elements, nodeList, addClass e removeClass

