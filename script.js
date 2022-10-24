
// let sumaNumeros = 10 + 15;


// //funciones

// function saludar(nombre,edad,categoria){

//     console.log("hola" + nombre);
//     console.log("edad usuario: " + edad);

//     if(edad>18){
//         console.log("el usuario es mayor a 18")
//     }else{
//         console.log("el usuario es menor que 18")
//     }

//     switch(categoria){
//         case 1: 
//             console.log("El usuario es categoria: A")
//             break
//         case 2:
//             console.log("El usuario es categoria: B")
//             break
//         default:
//             console.log("usuario sin categoria")
//             break
//     }
// }

// // prompt("ingrese su nombre");
// // alert("hola Alejandra");//tipo de dato String

// let nombreUsser1 = prompt("ingrese nombre de usuario");
// let nombreUsser2 = prompt("ingrese nombre de usuario");
// let nombreUsser3 = prompt("ingrese nombre de usuario");


// saludar(nombreUsser1,36,1);

// saludar(nombreUsser2 ,15,2)

// saludar(nombreUsser3,21);

//variable del tipo global
let total = 0;
let num1 =0;
let num2 = 0;
let contador = 0;



function pedirDatos(){

    num1 = Number(prompt("ingrese un primer numero"))
    num2 = Number(prompt("ingrese un segundo numero"))

}


//validaciones
function sumarNumeros(){


    //variable local
    console.log(isNaN(num2));

    if(num2==null || isNaN(num2) || num2 <0){
        alert("esta vacio!!! no puedo hacer la suma o no es numero")
    }else{

    total = num2 + num2;

    console.log("la suma es local: "+ total);
    }


}

// evitar enviar algo vacio



//Scope..entorno de ejecu de variables
console.log("variable global: "+total);



function irOtraPa(){
    console.log("estoy robando tus datos");
    contador++
    console.log("contador: " + contador);
    window.open("http://www.desarrolloweb.com")
}