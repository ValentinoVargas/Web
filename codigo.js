/**
 * Lluvia de Colores - Lógica de Selección de Paquetes y Reserva
 */

// Selecciona automáticamente la opción correcta en el <select> según el paquete clickeado
function seleccionarPaquete(nombrePaquete) {
  const selectPaquete = document.getElementById('paquete');
  if (selectPaquete) {
    selectPaquete.value = nombrePaquete;
  }
}

// Envía los datos ingresados en el formulario directo a WhatsApp
function enviarReserva(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const paquete = document.getElementById('paquete').value;
  const fecha = document.getElementById('fecha').value;
  const mensaje = document.getElementById('mensaje').value;

  // Reemplaza por tu número de WhatsApp con código de país (Ej: 51987654321 para Perú)
  const numeroWhatsApp = "51987654321";

  // Construir el texto del mensaje
  const textoMensaje = `¡Hola! Quisiera reservar un paquete de fiesta.%0A%0A` +
    `*Nombre:* ${nombre}%0A` +
    `*Teléfono:* ${telefono}%0A` +
    `*Paquete:* ${paquete}%0A` +
    `*Fecha del Evento:* ${fecha}%0A` +
    `*Notas:* ${mensaje || 'Sin comentarios adicionales'}`;

  // Redirigir a WhatsApp
  window.open(`https://wa.me/${numeroWhatsApp}?text=${textoMensaje}`, '_blank');
}