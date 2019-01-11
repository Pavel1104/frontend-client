export const validate = values => {
  const errors = {}
  if (!values.username) {
    // eslint-disable-next-line
    errors.username= 'Поле обязательно для заполнения!'
  } else if (!values.password) {
    // eslint-disable-next-line
    errors.password= 'Поле обязательно для заполнения!'
  } else if (values.password !== values.confirm_password) {
    // eslint-disable-next-line
    errors.confirm_password= 'Введенные пароли не совпадают'
  }
  return errors
}
