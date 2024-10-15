export default class Cl_tienda {
  constructor() {
    this.acumMonto = 0;
  }

  procesarCliente(cliente) {
    cliente.calcularMonto();
    cliente.producto.acumCantidad += cliente.cantidad;
    this.acumMonto += cliente.montoAPagar;
  }

  devolverMonto() {
    return this.acumMonto;
  }

  devolverMasVendido(A, B, C) {
    let cA = A.acumCantidad;
    let cB = B.acumCantidad;
    let cC = C.acumCantidad;

    if ((cA > cB) & (cA > cC)) {
      return "A";
    } else if ((cB > cA) & (cB > cC)) {
      return "B";
    } else return "C";
  }
}
