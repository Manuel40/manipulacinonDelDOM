//Una variable es un espacio en memoria el cual podemos utilizar para almacenar valores cambiantes con el tiempo de vida del cualquier software

//La diferencia entre declarar e inicializar una variable consiste en que al declararla reservamos un espacio en memoria en el cual almacenaremos un valor posteriormente
//al inicializar una variable consiste en asignarle n valor a la variable que ya habíamos declarado anteriormente a esto se le llama inicializarla
//es cuanddo una variable ya tiene un valor almacenado que le hemos asignado

//La diferencia entre sumar números y concatenar string es fácil si sumamos un mero con otro obtendremos la suma aritmética 
//por ejemplo si sumamos 3+3 obtendremos como resultado un 6 pero si sumamos los Sting
// "3" +"3" obtendremos un "33” como resultado

//El operador que nos permite sumar o concatenar es el signo +

//Determina el nombre y tipo de dato para almacenar en variables la siguiente información
/*

 nombre de la variable tipo de dato
 nombre                 String
 apellido               String
 nombre de usuario      String
 edad                   numero
 correo Electrónico      String
 mayorDeEdad            numero
 dineroAhorrado         numero
 deudas                 numero
*/

//
var nombre ="Manuel Gonzalez";
var apellido ="";
var nombreDeUsusario =" Manuel Gonzalez";
var edad=18;
var correoElectronico="";
var mayorDeEdad=0;
var dineroAhorrado=5000;
var deudas=1200;


function imprimirDatos(){
    console.log("nombre completo: "+nombre + " "+apellido);
    console.log(`Dinero real : ${dineroAhorrado-deudas}`);
}


/*
¿Que es un afunción?
 Una funcion es un bloque de c odigo el cual se encarga de realizar un atarea en especifico
 cundo la mandamos llamar.

 ¿cuando me sirve una funcion en mi codigo?
 una funcion es util en mi codigo cuando deseo realizar una accion mas de una vez dentro del coodigo
 de esta manera reutilizamos el codigo que ya hemos programado con anterioridad
 y no es necesario volver a esvcribir un nuevo bloque de codigo para realizzar la accion cada vez que sea requerida.

 ¿Cual es la diferencia entre parametros y argumentos de una funcion?
 el parametro es como tal los nombres que aparacen en la definicon de una funcion 
 y los argumentos son los valores que le pasamos a la funcion cuando la mandamos llamar
*/

function presentarse(name,lastName,nickName){
    this.name=name;
    this.lastName=lastName;
    var completeName = name+" "+lastName;
    this.nickName=nickName;

    console.log("Hola mi nombre es: "+completeName+" "+"pero prefiero que me digan "+nickName)
}

/*Condicionales
¿Que es un condicional?
un condicional nos ayuda cuando queremos validar si alguna expresion es verdadera o falsa
y depende de este resultado se ejecutara un bloque de codigo en especifico

¿Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?
En este lenguaje existen tres condicionles if y else y switch

el if se ejecutara si el valor de la expresion es verdero y de lo contrario se ejecutara el bloque de codigo que
contenga el else
cabe destacar que tambien existe el else if el cual utilizamos cuando queremos validar mas de una condicion  if

el switch
El switch a diferencia del  if y el else no solo evalua si un acondicion es falsa o verdadera 
si no que evalua entre diferentes opciones y un default el cual se ejecuta si el argumento reciido
no corresponde a ninguna de  la s opciones

¿Puedo conbinar funciones y condiciones?

Si podemos combinar en la cuestion de if se cumle cierta condicion sea verdadera o falsas
ejecutar la funcion deseada.

*/
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar llos cursos gratis");
}
else if(tipoDeSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar  casi todos los cursos por un año");
}
else if(tipoDeSuscripcion =="ExpertPlus"){
    console.log("Tu y alguien mas pued tomar todos los cursos por un año");
}

/*
¿Que es un ciclo?
un ciclo itera(repite constantemente un bloque de codigo  hasta que la condicion especificada en el cilo se cumpla
    es entonces cuando el ciclo se rompe y finaliza)
¿Que tipo de ciclos existen en javaScript?
Existen los ciclos for, while y for each
¿Que es u ciclo infinito y porque es un problema?
un ciclo infito es aque en el que nunca se cumplira la condicion para que este finalize
por lo tanto se quedar ejecutando por siempre lo cual impliaca el problema de dejarnos atascados ahi.
¿Pudo mezclar ciclos y condicionales?
si se puede ya que podriamos mezclar  o ejecutar cierto cilclo si una condicional nos arrojase un resultado verdadeo o falso 
o incluso si lo comparamos con un valor en especifico
*/

var condicion=0;

while(condicion<5){
    console.log("El valor de i es: "+condicion);
    condicion++;

}

var condicion2=10
while(condicion2>=2)
{
    console.log("El valor de i es"+condicion2);
    condicion2--;
}

 var respuestaUsuario = "";

function acertijo(respuestaUsuario=window.prompt("Cuanto es 2+2"))
{
 if(respuestaUsuario == 4){
    console.log("felicidades es correcto");
 }
 else{
    acertijo();
 }
}

/*
¿Que es un array?
un array es una coleccion de variables dentro de un objeto  de tippo array el cual puede contener
multiples variables

*/

var numeros = [1,2,3];

//funcion para imprimir los elementos
function todos(elementos){
    for(i=0;i<elementos.length;i++)
    {
        console.log(elementos[i]);
    }

}

var persona ={
    nombre:"manuel",
    edad:34,
    direccion:"chapultepec"
}

function persona(nombre,edad,direccion){
    this.nombre=nombre;
    this.edad=edad;
    this.direccion=direccion;
}

var persona1 = new persona("juan",23,"spada grosi");

// para recorrer las propiedades de un objeto
//no podemos recorrerlas como un array debemos utilizzar el ciclo
//for in  y para acceder a el valor de la ropiedad escribimos el objeto y entre corchetes pa prop que itera en este caso
function imprimirobjeto(persona){
    for(prop in persona){
        console.log(prop+": "+ persona[prop]);
    }
}
