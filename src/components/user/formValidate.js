export const validateRegisterForm = values => {
  const errors = {}
  if (!values.username) {
    errors.username= 'Поле обязательно для заполнения!'
  } else if (!values.password) {
    errors.password= 'Поле обязательно для заполнения!'
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password= 'Введенные пароли не совпадают'
  }
  return errors
}

export const validateLoginForm = values => {
  const errors = {}
  if (!values.username) {
    errors.username= 'Поле обязательно для заполнения!'
  } else if (!values.password) {
    errors.password= 'Поле обязательно для заполнения!'
  }
  return errors
}
