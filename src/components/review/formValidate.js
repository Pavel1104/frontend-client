export const validateReviewForm = values => {
  const errors = {}
  if (!values.text) {
    errors.text= 'Поле обязательно для заполнения!'
  }
  return errors
}
