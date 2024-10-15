/*

3. La Tienda

Una tienda vende 3 productos: Producto A, Producto B y Producto C. Al principio
de la jornada se conoce el precio de cada producto. Conociendo la cédula de cada
cliente, el código del producto que lleva y la cantidad, se requiere:

a) Calcular el monto a pagar por cada cliente.
b) También debe reportarse: cuál artículo se vendió más y el monto total vendido.

*/

import Cl_tienda from "./Cl_tienda.js";
import Cl_producto from "./Cl_producto.js";
import Cl_cliente from "./Cl_cliente.js";

// Productos
let A = new Cl_producto("A", 10);
let B = new Cl_producto("B", 5);
let C = new Cl_producto("C", 20);

// Clientes
let cl1 = new Cl_cliente("555", C, 3);
let cl2 = new Cl_cliente("222", B, 5);
let cl3 = new Cl_cliente("333", A, 10);
let cl4 = new Cl_cliente("111", B, 10);

// Tienda
let tienda = new Cl_tienda();

tienda.procesarCliente(cl1);
tienda.procesarCliente(cl2);
tienda.procesarCliente(cl3);
tienda.procesarCliente(cl4);

let salida = document.getElementById("Salida");

let mostrarTabla = (cliente) => {
  return `
		<tr>
			<td>${cliente.cedula}</td>
			<td>${cliente.producto.tipo}</td>
			<td>${cliente.cantidad}</td>
			<td>$${cliente.reportarMonto()}</td>
		</tr>
	`;
};

salida.innerHTML = `
	<table>
		<tr>
			<th>Cedula</th>
			<th>Producto</th>
			<th>Cantidad</th>
			<th>Monto a pagar</th>
		</tr>
		${mostrarTabla(cl1)}
		${mostrarTabla(cl2)}
		${mostrarTabla(cl3)}
		${mostrarTabla(cl4)}
	</table>
	<br>
	<span>
		El articulo mas vendido fue el producto:
		<strong>${tienda.devolverMasVendido(A, B, C)}</strong>
	</span>
	<br>
	<span>
		Monto Total Vendido: $${tienda.devolverMonto().toFixed(2)}
	</span>
`;
