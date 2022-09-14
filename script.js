/*const h1 = document.querySelector('h1');
const parrafito =document.querySelector('.parrafito');
const p = document.querySelector('p');
const parrafoId= document.querySelector('#Id');

h1.innerHTML = ('Mexico lindo');
//forma ams segura de modificar html

//h1.innerText = ('')

console.log(h1.getAttribute('class'));

h1.setAttribute('class','masgrande');

console.log(h1.getAttribute('class'));

//funcion para mofdificar los atributos de clases

h1.classList.add('rojo');
h1.classList.remove('rojo');
//creacio  de un nuevo elemento meduante el metodo 
//createElement
const img = document.createElement('img');
//asignamos el atributo src de la imagen con serAttribute
img.setAttribute('src','./descarga.jpg')
//intercambiamos la etiqueta parafo id por  img con append()
parrafoId.append(img);
console.log(img);
*/

const input1=document.querySelector('#calculo');
const input2=document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
const result = document.querySelector('#result');


function btnOnclick(){
let inputNumber = Number(input1.value);
let inputNumber2 = Number(input2.value);
let resultado =inputNumber +inputNumber2;
console.log(resultado);
result.innerText ="resultado : " + resultado;
}