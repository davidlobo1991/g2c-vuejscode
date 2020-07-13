export default {
  aceptar: 'Accept',
  cancelar: 'Cancel',
  cerrar: 'Close',
  edit_profile: 'Edit Profile',
  register: {
    error: {
      email: {
        exists: 'Email already exists',
        sending: 'Error sending the validation code',
        verification: 'Error verifying the code',
        required: 'Email required',
        format: 'Format email'
      },
      phone: {
        exists: 'Phone already exists',
        sending: 'Error sending the validation code',
        verification: 'Error verifying the code',
        required: 'Phone required'
      },
      nick: {
        required: 'The username is required',
        exists: 'The username is already taken',
        invalid:
          'Nickname can only be mixed lowercase letters, numbers and slash',
        length: 'Max length is 64 chars'
      },
      password: {
        required: 'The password is required',
        length: 'Password min lenght 6'
      },
      creating: {
        account: 'Error creating the account.'
      }
    }
  },
  login: {
    error: {
      message: 'Username and/or password invalid'
    }
  },
  welcome: 'Welcome',
  welcome_banner_message:
    'Fill your profile information to appear on the Network and start receving and requesting connections.'
}
