import { TextareaAutosize } from '@mui/material'
import { useField } from 'formik'

const TextareaWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name)

  const configTextfield = {
    ...field,
    ...otherProps,
    variant: 'outlined',
  }

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true
    configTextfield.helperText = meta.error
  }

  return <TextareaAutosize {...configTextfield} />
}

export default TextareaWrapper
