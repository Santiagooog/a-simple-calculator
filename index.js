const $ = (selector) =>{return document.querySelector(selector)}
const textField = $('#display')
textField.addEventListener('change',(e) => {
  console.log(e.target.value)
})

const clear = $('#clear')
clear.addEventListener('click', () =>{
  textField.value = ''
})

const backSpace = $('#backspace')
backSpace.addEventListener('click', () => {
  const lon = textField.value.slice(0,-1)
  textField.value = lon
})

const percent = $('#percent')
percent.addEventListener('click',() => {
  textField.value = textField.value+='%'
})


const decimal = $('#decimal')
decimal.addEventListener('click',()=>{
  textField.value+='.'
})

const zero = $('#zero')
zero.addEventListener('click',() => {
  textField.value+=0
})
const one = $('#one')
one.addEventListener('click',() => {
  textField.value+=1
})
const two = $('#two')
two.addEventListener('click',() => {
  textField.value+=2
})
const three = $('#three')
three.addEventListener('click',() => {
  textField.value+=3
})
const four = $('#four')
four.addEventListener('click',() => {
  textField.value+=4
})
const five = $('#five')
five.addEventListener('click',() => {
  textField.value+=5
})
const six = $('#six')
six.addEventListener('click',() => {
  textField.value+=6
})
const seven = $('#seven')
seven.addEventListener('click',() => {
  textField.value+=7
})
const eight = $('#eight')
eight.addEventListener('click',() => {
  textField.value+=8
})
const nine = $('#nine')
nine.addEventListener('click',() => {
  textField.value+=9
})

const sum = $('#add')
sum.addEventListener('click', () => {
  textField.value +='+'
})
const subtract = $('#subtract')
subtract.addEventListener('click', () => {
  textField.value +='-'
})
const multiply = $('#multiply')
multiply.addEventListener('click', () => {
  textField.value +='*'
})
const divide = $('#divide')
divide.addEventListener('click', () => {
  textField.value +='/'
})
const equals = $('#equals')
equals.addEventListener('click',() => {
  const array = [...textField.value]
  const position = array.findIndex(valor => valor === '%')
  if(position !== -1){
    textField.value = porcent(array,position)
  }else{textField.value = eval(textField.value)}
})

const porcent = (array,position) =>{
  const operation1 = array.slice(0,position).join('')
  console.log(operation1)
  const operation2 = array.slice(position+1).join('')
  console.log(operation2)
  return (operation1*operation2)/100
}

