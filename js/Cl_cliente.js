export default class Cl_cliente {
  constructor(cedula, producto, cantidad) {
    this.cedula = cedula;
    this.producto = producto;
    this.cantidad = cantidad;
    this.montoAPagar = 0;
  }

  calcularMonto() {
    this.montoAPagar = this.cantidad * this.producto.precio;
  }

  reportarMonto() {
    return this.montoAPagar;
  }
}
