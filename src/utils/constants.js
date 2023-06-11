export const ROUTES = {
  home: '/',
  detail: '/detail/',
  contact: '/contact',
  error: '*'
}

// Para usar con la API de pokemons
export const BASE_URL = 'https://pokeapi.co/api/v2/'

export const YEAR = new Date().getFullYear()

// Expresiones regulares para validaciones
export const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
export const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
// entre 10 a 13 numeros
export const regexPhone = /^([0-9]{10,13})$/ 
// entre 1 a 255 caracteres
export const regexComments = /^.{1,255}$/ 

export const ERROR_REQUIRED = {
  firstName: "The filed 'first name' is required.",
  lastName: "The filed 'lst name' is required.",
  emall: "The filed 'e-mail' is required.",
  telephone: "The filed 'telephone' is required.",
  comments: "The filed 'messagge' is required."
}

export const ERROR_MSG = {
  firstName: "The filed 'Nombre' only accepts letters and white spaces.",
  lastName: "The filed 'Apellido' only accepts letters and white spaces.",
  email: "The filed 'Correo' is incorrect, must have: '@' and '.'",
  telephone: "The filed 'Teléfono' only accepts between 10 and 13 numbers.",
  comments: "The filed 'Mensajes' has a maximun of 255 characters."
}

export const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  comments: ''
}