class Cl_Articulo {
  constructor(nombre, cant, precio) {
    this.nombre = nombre;
    this.cant = cant;
    this.precio = precio;
  }

  SubTotalArt() {
    return this.cant * this.precio;
  }
}

class Cl_Factura {
  constructor() {
    this.acumSubArt = 0;
  }

  Iva() {
    return this.acumSubArt * 0.16;
  }

  TotalFact() {
    return this.acumSubArt + this.Iva();
  }
  Procesar(Articulo) {
    this.acumSubArt += Articulo.SubTotalArt();
  }
}

let factura = new Cl_Factura();

let articulo1 = new Cl_Articulo("harina", 3, 20);
let articulo2 = new Cl_Articulo("arroz", 2, 25);
let articulo3 = new Cl_Articulo("pasta", 1, 15);
let articulo4 = new Cl_Articulo("atún", 2, 10);

factura.Procesar(articulo1);
factura.Procesar(articulo2);
factura.Procesar(articulo3);
factura.Procesar(articulo4);

let salida = document.getElementById("salida");
salida.innerHTML += `<p>${articulo1.nombre}: ${articulo1.precio} ${articulo1.SubTotalArt()}`;
salida.innerHTML += `<p>${articulo2.nombre}: ${articulo2.precio} ${articulo2.SubTotalArt()}`;
salida.innerHTML += `<p>${articulo3.nombre}: ${articulo3.precio} ${articulo3.SubTotalArt()}`;
salida.innerHTML += `<p>${articulo4.nombre}: ${articulo4.precio} ${articulo4.SubTotalArt()}`;
salida.innerHTML += `<p> SubTotalArt: ${factura.acumSubArt}</p>`;
salida.innerHTML += `<p> Iva: ${factura.Iva()}</p>`;
salida.innerHTML += `<p> TotalFact: ${factura.TotalFact()}`;
