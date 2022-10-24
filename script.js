
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


//validaciones
function sumarNumeros(numA,numB){

    //variable local
    console.log(isNaN(numB));

    if(numB==null || isNaN(numB) || numB <0){
        alert("esta vacio!!! no puedo hacer la suma o no es numero")
    }else{

    total = numA + numB;

    console.log("la suma es local: "+ total);
    }


}

// evitar enviar algo vacio
sumarNumeros(10,3);


//Scope..entorno de ejecu de variables
console.log("variable global: "+total);



