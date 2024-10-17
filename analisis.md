# Entrada:
- Cedula del cliente
- Tipo de producto que lleva el cliente
- Cantidad de producto que lleva el cliente

# Salida:
- Por Tienda:
    - cual articulo se vendio mas
    - monto total vendido


# Datos a ingresar:

Cedula|Tipo de Producto|Cantidad|
-|-|-|
555|C|3|
222|B|5|
333|A|10|
111|B|10|

# Logica de los metodos:

```js
procesarCliente(){
    calcularMonto()
    cliente.producto.acumCantidad += cliente.cantidad
    tienda.acumMonto += cliente.montoAPagar
}
```
```js
calcularMonto(){
    cliente.montoAPagar = cantidad * producto.precio
}
```
```js
devolverMasVendido(A, B, C){
    // Comparar el acumulado del producto A, B y C

    // Devolver A
    if((acumA > acumB) & (acumA > acumC)) { return A }

    // Devolver B
    else if ((acumB > acumA) & (acumB > acumC)) { return B }

    // Devolver C
    else return "C"
}
```
