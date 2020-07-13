export default {
  aceptar: 'Aceptar',
  cancelar: 'Cancelar',
  cerrar: 'Cerrar',
  edit_profile: 'Editar Perfil',
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
        exists: 'El nombre de usuario ya existe',
        invalid:
          'El nombre de usuario solo puede contener letras minúsculas, letras, números y guiones',
        length: 'Max longitud: 64 carácteres'
      },
      password: {
        required: 'La contraseña es requerida',
        length: 'Longitud mínima de contraseña: 6 carácteres'
      },
      creating: {
        account: 'Error creando la cuenta.'
      }
    }
  },
  login: {
    error: {
      message: 'Usuario y/o contraseña invalidos'
    }
  },
  welcome: 'Bienvenido/a',
  welcome_banner_message:
    'Fill your profile information to appear on the Network and start receving and requesting connections.'
}
