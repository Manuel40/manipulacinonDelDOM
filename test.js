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
