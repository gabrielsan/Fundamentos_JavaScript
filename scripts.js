// MÉTODOS   

// console.log('Hello world JavaScript!')

// //console
// console.error('Este é um erro!')
// console.warn('Este é um aviso!')
// console.log('Esta é uma mensagem!')

// // VARIÁVEIS

// var x = 10 // Derclaração var
// let y = 15 // Maneira mais moderna Let (Let e Var não podem ser redeclarados estando em outro escopo)
// const z = 20 // Maneira mais moderna - const não muda de valor

// if(1){
//     let y = 55
//     console.log(y)
// }s

// console.log(x)
// console.log(y)
// console.log(z)

// y = 25

// console.log(y)

// // TIPOS DE DADOS
// const name = "Matheus" //texto
// console.log(name)
// console.log(typeof name) // Typeof serve para checar o tipo da variável

// const shirQty = 4 //numérico
// console.log(shirQty)
// console.log(typeof shirQty)

// const decimal = 12.4 //ponto flutuante
// console.log(decimal)
// console.log(typeof decimal)

// const isApproved = false // Booleano False or true
// console.log(isApproved)
// console.log(typeof isApproved)

// let surname = "Battisi" // Nulo
// console.log(surname)
// console.log(typeof surname)

// let age // Indefinido
// console.log(age)
// console.log(typeof age)

// const languages = ["Portuguese", "English", "Espanish"] // Array
// console.log(languages)
// console.log(typeof languages)

 const user = {email: 'matheus.gonçalves@gmail.com', password: '12345', age:'30'} //Object literals
 console.log(user)
 console.log(typeof user)

// MÉTODOS DE STRING
const fullName = "Matheus Battisti"
console.log(fullName.length) // Informa a quantidade de caracteres em uma String


const stringToArray = fullName.split(' ') // Separa em lista
console.log(stringToArray)

console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())

console.log(fullName.indexOf("Battisti"))
console.log('abdajksbdkjsabds'.indexOf("Battisti"))

console.log(fullName.slice(0, 7)) // Extrai uma parte da string completa

// MÉTODOS DE MANIPULAÇÃO DE ARRAYS

const list =['a', 'b', 'c', 'd', 'e']
console.log(list.length)
console.log(list[2]) // Acessar um indece específico da lista
list[5] = 'f'
console.log(list)

console.log(list[list.length - 1]) // ultimo elemento
list.push('g') // Adicionar um elemento no final da lista
console.log(list)

list.pop() //Serve para remover
console.log(list)

list.shift()
console.log(list) // Remove no inicio

list.unshift('a') // Adiciona no inicio
console.log(list)

// OBJETOS

const product = {
    name: 'Camisa',
    price: 15.99,
    inStock: true,
    szis: ['P', 'M', 'G'],
    'Main Color': 'Blue'
}

console.log(product.name)
console.log(product.price)
console.log(product.inStock)
console.log(product.szis)

console.log(product['Main Color'])


// DESTRUCTURING - SERVE TANTO PARA ARRAYS QUANTO PARA OBJETOS. CONSEGUE EXTRAIR VARIÁVEIS POR MEIO DE UM OBJETO
const {price, inStock} = product
console.log(price)
console.log(inStock)

const [n1, n2] = list

console.log(n1)
console.log(n2)

// JSON - JavaScript Object Notation
const dog = {
    name: 'Shark',
    age: 10,
}

const json = JSON.stringify(dog)
console.log(json)

const obj = JSON.parse(json) // Converte um json em objeto JavaScript
console.log(obj)

const jsonErrado= '{"name": "Teste", "surname": "Testando"}'

const obj2 = JSON.parse(jsonErrado)

console.log(obj2)


// ESTRUTURAS CONDICIONAIS
const a = 10

if( a > 8 ){
    console.log("A é maior que 8")
}

// >, <, >=, <=

const b =  "Matheus"
if(b === "Jonathan"){
    console.log("O nome é Jhonatan")
} else if(b === "Pedro"){
    console.log("O nome é Pedro")
} else {
    console.log("Não encontrei o usuário")
}

const someNumber = 14

// IF TERNÁRIO  
let testingANumber = someNumber < 20 ? 'Yes' : 'No'
console.log(testingANumber)

// ESTRUTURA DE REPETIÇÃO - WHILE OU LOOP
const myList = [1,2,3,4,5]
let counter = 0

while(counter < myList.length){
    console.log('Imprimindo o laço WHILE: ' + myList[counter])
    counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for(let counter = 0; counter < myList.length; counter++) {
    console.log('Imprimindo o laço FOR: ' + myList[counter])
}

// MÉTODOS DE ARRAY -> REPETIÇÃO

const names = ["Matheus", "João", "Pedro", "Maria"]

names.forEach(function(name){
    console.log(`O nome é: ${name}`)
})

const modifiedNames = names.map(function(name){
    if(name == 'Matheus'){
        return(name == 'Sr.Matheus')
    }else{
        return name;
    }
})

console.log(modifiedNames)


const bigNumbers = [1,2,3,4,5,10,100].filter(function(number){
    return number >= 5;
})

console.log(bigNumbers)


const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number){
    return total + number
})

console.log(sumAll)


// FUNÇÕES 
function minhaFuncao(){
    console.log("Olá função!")
}

minhaFuncao()

function nomeCompleto(nome, sobrenome){
    console.log(`o nome completo é: ${nome} ${sobrenome}`)
}

console.log(nomeCompleto('Matheus', 'Battisti'))
console.log(nomeCompleto('João', 'Azevedo'))

const primeiroNome = 'Gabriel'
const segundoNome = 'Santos'

const meuNomeCompleto = nomeCompleto(primeiroNome, segundoNome)

console.log(meuNomeCompleto)

// ARROW FUNCTIONS
const myArrowFunction = (a,b) => {
    return a + b
}

console.log(myArrowFunction(2,4))


const myArrowFunction2 = (a,b) => a + b

console.log(myArrowFunction2(3,2))


// CLASSES - conceitos de orientação a objetos

class Product{
    constructor(name, price){
        this.name = name //instanciando
        this.price = price
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }
}

const socks = new Product('Meia branca', 19.99)
const shirt = new Product('Camisa amarela', 20.50)

console.log(socks.name)
console.log(socks.price)
console.log(shirt.name)

// HERANÇA

class SuperProduct extends Product{
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }

    showAdjective(adjective){
        return `o ${this.name} é muito ${adjective}`
    }

    static sayHello(){ 
        console.log('Hello')
     }
}


const tenis = new SuperProduct('Tenis vermelho', 59.90, '42')

console.log(tenis.name)
console.log(tenis.price)
console.log(tenis.size)
console.log(tenis.showAdjective('Bom'))

SuperProduct.sayHello()

// DOM - Document Object Model
//  SELEÇÃO DE ELEMENTOS
const title = document.getElementById('title')

console.log(title)

// QUERY SELECTOR
const sameTitle = document.querySelector('#title')
console.log(sameTitle)

const texts = document.querySelectorAll('.text')
console.log(texts)
console.log(texts[1])

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

// MANIPULAÇÃO DE ELEMENTO
title.textContent = 'Mudei o texto'

texts[0].innerHTML = '<span>Altramos o HTML deste elemento</span>'

texts[1].style.backgroundColor = 'red'

texts[2].classList.add('text')

texts[2].classList.remove('text')

texts[3].remove()

//EVENTOS
const btn = document.querySelector("#btn")
btn.addEventListener("click", function(){
    console.log('clicou!')
    texts[2].style.color = 'blue'
})
