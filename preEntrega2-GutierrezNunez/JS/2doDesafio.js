//Entrega numero 2. Incluir funciones para todas las cuentas.
//Objetos de JS 
//Arrays.
//Metodos de busqueda y filtrado sobre el array

//Prompt para que el usuario se registre.



//credenciales

let usuario = "fulanito";
console.log(usuario);

let password = "12345";
console.log(password);

//Bucle for para el inicio de sesión


for (let i = 1; i <= 3; i++) {
  let nombreUsuario = prompt("Hola ingresa tu usuario");
  let passUsuario = prompt("password");
  if (usuario == nombreUsuario && password == passUsuario) {
    alert("Bienvenido a nuestra tienda de bebidas " + nombreUsuario);
    break;
  } else {
    alert("Credenciales incorrectas. " + i + " de 3 intentos");
  }
}

//Objetos. En este caso los objetos van a ser utilizados como ficha técnica.
//El usuario puede elegir si desea ver o no Las especificaciones

class Cerveza {
    constructor (nombre, tipo, fabricante, graduacionAlcohol, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.fabricante = fabricante;
        this.graduacionAlcohol = graduacionAlcohol; 
        this.precio = precio
    }
  }
  
  const brahma = new Cerveza (
    "Brahma chop", 
    "Rubia", 
    "Cervecería y Maltería Quilmes",
    "4,8%",
    1000 );
  
  const patagonia = new Cerveza (
    "Patagonia 24/7", 
    "Ipa", 
    "Cervecería Patagonia",
    "4,5%",
    1500 );
  
  
  const andes = new Cerveza (
    "Andes origen", 
    "Negra", 
    "Cervecería y Maltería Quilmes", 
    "5,3%",
    1400);
  
  class Vino {
    constructor (nombre, tipoUva, bodega, cosecha, precio){
        this.nombre = nombre;
        this.tipoUva = tipoUva;
        this.bodega = bodega;
        this.cosecha = cosecha; 
        this.precio = precio;
    }
  };
  
  const rutini = new Vino (
    "Felipe rutini ", 
    "50% Cabernet Sauvignon, 30% merlot, 20% malbec ", 
    "La rural ", 
    "2017 ",
    250000);
  
  
  const catena = new Vino (
    "Nicolas Catena Zapata ", 
    "54% Cabernet Sauvignon, 25% Cabernet Franc, 21% malbec ",
    "Catena Zapata ", 
    "2020 ",
    80000);
  
  
  const cobos = new Vino (
    "Volturno ", 
    "Cabernet Sauvignon 78%, Malbec 20% ", 
    "Viña Cobos ", 
    "2020 ",
    450000 );
  
  class Destilado {
    constructor (nombre, tipoBebida, productor, graduacionAlcohol, precio){
        this.nombre = nombre;
        this.tipoBebida = tipoBebida;
        this.productor = productor;
        this.graduacionAlcohol = graduacionAlcohol; 
        this.precio = precio;
    }
  }
  
  const whisky = new Destilado (
    "Johnnie Walker Black Label", 
    "Whisky", 
    "Diageo", 
    "40%",
    20000 );
  
  const tequila = new Destilado (
    "Casa dragones Añejo", 
    "Tequila", 
    "Casa dragones", 
    "40%",
     40000);
  
  
  const vodka = new Destilado (
    "Absolut", 
    "Vodka", 
    "The Absolut Company", 
    "40%",
    15000 )



alert ("Estos son los productos que tenemos disponibles hoy (Estan en el log)")
console.log ("cervezas: \n" +
  brahma.nombre + ", " + patagonia.nombre + ", " + andes.nombre + "\n" +
  "Vinos: \n" +
  rutini.nombre + ", " + catena.nombre + ", " + cobos.nombre + "\n" +
  "Destilados: \n" +
  whisky.nombre + ", " + tequila.nombre + ", " + vodka.nombre + "\n" 
)

let especificaciones = prompt ("Desea ver las especificaciones de cada uno?")
if (especificaciones == "si" || especificaciones == "Si" ){
  
  for(const atributos in brahma){
    console.log (atributos + " :" + brahma[atributos])
  }

  for(const atributos in patagonia){
    console.log (atributos + " :" + patagonia[atributos])
  }

  for(const atributos in andes){
    console.log (atributos + " :" + andes[atributos])
  }

  for(const atributos in rutini){
    console.log (atributos + " :" + rutini[atributos])
  }

  for(const atributos in catena){
    console.log (atributos + " :" + catena[atributos])
  }

  for(const atributos in cobos){
    console.table (atributos + " :" + cobos[atributos])
  }

  for(const atributos in whisky){
    console.log (atributos + " :" + whisky[atributos])
  }

  for(const atributos in tequila){
    console.log (atributos + " :" + tequila[atributos])
  }

  for(const atributos in vodka){
    console.log (atributos + " :" + vodka[atributos])
  }
}

//Luego emplearemos arrays para armar el carrito


const carrito = []

let continuarCompra = ""
let eleccion = prompt ("que te gustaria llevar hoy?")



if (eleccion == "brahma"  || "Brahma" == eleccion){
  let unidades = prompt ("Cuantas unidades")
  carrito.push((brahma.precio)*unidades)
  console.log (carrito)
  continuarCompra = prompt ("Algo mas?")

}if (eleccion == "patagonia" || "Patagonia" == eleccion || continuarCompra == "si"){
  unidades = prompt ("Cuantas unidades")
  carrito.push((patagonia.precio)*unidades)
  console.log (carrito)
  continuarCompra = prompt ("Algo mas?")

}if (eleccion == "andes" || "Andes" == eleccion || continuarCompra == "si"){
  unidades = prompt ("Cuantas unidades")
  carrito.push((patagonia.precio)*unidades)
  console.log (carrito)
  continuarCompra = prompt ("Algo mas?")

}if (eleccion == "rutini" || "Rutini" == eleccion || continuarCompra == "si"){
    unidades= prompt ("Cuantas unidades")
    carrito.push((rutini.precio)*unidades)
    console.log (carrito)
    continuarCompra = prompt ("Algo mas?")

}if (eleccion == "catena" || "Catena" == eleccion || continuarCompra == "si"){
    unidades= prompt ("Cuantas unidades")
    carrito.push((catena.precio)*unidades)
    console.log (carrito)
    continuarCompra = prompt ("Algo mas?")

}if (eleccion == "cobos" || "Cobos" == eleccion || continuarCompra == "si"){
    unidades= prompt ("Cuantas unidades")
    carrito.push((cobos.precio)*unidades)
    console.log (carrito)
    continuarCompra = prompt ("Algo mas?")

} if (eleccion == "whisky" || "Whyski" == eleccion || continuarCompra == "si"){
    unidades= prompt ("Cuantas unidades")
    carrito.push((whisky.precio)*unidades)
    console.log (carrito)
    continuarCompra = prompt ("Algo mas?")

}if (eleccion == "tequila" || "Tequila" == eleccion || continuarCompra == "si"){
    unidades= prompt ("Cuantas unidades")
    carrito.push((tequila.precio)*unidades)
    console.log (carrito)
    continuarCompra = prompt ("Algo mas?")

}

if (eleccion == "vodka" || "Vodka" == eleccion || continuarCompra == "si"){
    unidades= prompt ("Cuantas unidades")
    carrito.push((vodka.precio)*unidades)
    console.log (carrito)
    continuarCompra = prompt ("Algo mas?")
  }


//Funcion para mostrar el total del carrito con reduce

let total = carrito.reduce((a, b) => a + b, 0);

console.log("El total son $ " + total);











