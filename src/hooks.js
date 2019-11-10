import { useState } from 'react'

export const useForm = (callback, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const onChange = ev => {
    setValues({ ...values, [ev.target.name]: ev.target.value })
  }

  const onSubmit = ev => {
    ev.preventDefault()
    if (Object.keys(validate(values)).length === 0) {
      callback()

      setValues(initialState)
      console.log(values)
      setErrors({})
    } else {
      setErrors(validate(values))
    }
  }
  return {
    onChange,
    onSubmit,
    errors,
    values
  }
}
