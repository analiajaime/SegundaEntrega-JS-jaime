// Precios de las hamburguesas
const precioHamburguesaNormal = 2500;
const precioHamburguesaDoble = 2700;
const precioPapasFritas = 1500;
const precioBebida = 1500;

// Descuento por transferencia por Mercado Pago (10%)
const descuentoTransferencia = 0.1;

// Tiempo de espera de entrega del rappi (en minutos)
const tiempoMinimoEntrega = 30;
const tiempoMaximoEntrega = 60;

// Variables para almacenar la selección del usuario
let totalCompra = 0;
let tiempoEntrega = 0;

// Ciclo para que el usuario pueda agregar productos
while (true) {
  const opcion = prompt("Seleccioná tus producto: 1 - Hamburguesa Simple, 2 - Hamburguesa Doble, 3 - Papas Fritas, 4 - Bebida, 5 - Finalizar Compra");

  if (opcion === "5") {
    break; 
  }

    const cantidad = parseInt(prompt("Ingresá la cantidad que querés de este ítem:"));

  // Para alcular el costo de los productos seleccionados y agregarlo al total
  switch (opcion) {
    case "1":
      totalCompra += precioHamburguesaNormal * cantidad;
      break;
    case "2":
      totalCompra += precioHamburguesaDoble * cantidad;
      break;
    case "3":
      totalCompra += precioPapasFritas * cantidad;
      break;
    case "4":
      totalCompra += precioBebida * cantidad;
      break;
    default:
      alert("Opción inválida. Por favor, seleccioná un producto válido.");
  }
}

// Para aplicar descuento por transferencia con Mercado Pago
const formaDePago = prompt("Seleccioná la forma de pago: 1 - Tarjeta de Crédito, 2 - Mercado Pago");

if (formaDePago === "2") {
  totalCompra *= (1 - descuentoTransferencia);
}

// Calculamos tiempo de entrega aleatorio entre el mínimo y máximo
tiempoEntrega = Math.floor(Math.random() * (tiempoMaximoEntrega - tiempoMinimoEntrega + 1)) + tiempoMinimoEntrega;

// Mostrar el resumen de la compra
alert(`Resumen de la compra:
Total a pagar: $${totalCompra.toFixed(2)}
Tiempo de entrega: ${tiempoEntrega} minutos`);
