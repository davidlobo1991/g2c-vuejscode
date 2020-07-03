export default {
  aceptar: 'Aceptar',
  cancelar: 'Cancelar',
  cerrar: 'Cerrar',
  register: {
    error: {
      email: {
        exists: 'Ya existe una cuenta asociada al email introducido',
        sending: 'Error al enviar el código de validación',
        verification: 'Error al verificar el código',
        required: 'Email required',
        format: 'Format email'
      },
      phone: {
        exists: 'Ya existe un teléfono asociado al número introducido',
        sending: 'Error al enviar el código de validación',
        verification: 'Error al verificar el código',
        required: 'Phone required'
      },
      nick: {
        required: 'El nombre de usuario es requerido',
        exists: 'El nombre de usuario ya existe'
      },
      password: {
        required: 'La contraseña es requerida',
        length: 'Longitud mínima de contraseña: 6 carácteres'
      }
    }
  }
}
