import {useState} from 'react'
import { Rating } from '@mui/material'
import { useField } from 'formik'

const RatingWrapper = ({ name, ...otherProps }) => {
  const [field, meta, helpers] = useField(name)
  // const [value, setValue] = useState(0)
  const {value} = meta
  const {setValue} = helpers

  const configTextfield = {
    ...field,
    ...otherProps,
    value,
  }

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true
    configTextfield.helperText = meta.error
  }

  return <Rating
            {...configTextfield}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
}

export default RatingWrapper
