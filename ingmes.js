// Obtener el formulario y el botón de envío
const form = document.getElementById('formulario');
const submitButton = document.getElementById('enviar');

// Agregar un evento de escucha para el envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener el valor de frecuencia de ingreso seleccionado
  const frecuencia = document.getElementById('frecuencia').value;

  // Validar la frecuencia seleccionada
  if (frecuencia === 'diario') {
    const diasTrabajo = parseInt(document.getElementById('diasTrabajo').value);
    if (isNaN(diasTrabajo)) {
      alert('Debe especificar la cantidad de días trabajados en la semana');
      return;
    }
  }

  // Calcular el resultado según la frecuencia de ingreso
  let resultado;
  switch (frecuencia) {
    case 'mensual':
      resultado = parseFloat(document.getElementById('ingreso').value);
      break;
    case 'quincenal':
      resultado = parseFloat(document.getElementById('ingreso').value) * 2;
      break;
    case 'semanal':
      resultado = parseFloat(document.getElementById('ingreso').value) * 4.3;
      break;
    case 'diario':
      const diasTrabajo = parseInt(document.getElementById('diasTrabajo').value);
      resultado = parseFloat(document.getElementById('ingreso').value) * 4.3 * diasTrabajo;
      break;
    default:
      resultado = 0;
      break;
  }

  // Mostrar el resultado
  alert('El resultado es: ' + resultado);
});