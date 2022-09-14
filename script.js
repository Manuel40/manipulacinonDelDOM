const h1 = document.querySelector('h1');
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

const img = document.createElement('img');
img.setAttribute('src','./descarga.jpg')
parrafoId.append(img);
console.log(img);