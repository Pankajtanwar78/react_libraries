import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'

type Props = {
  name: string;
  label: string;
  type?: string;
  options?: {
    key: string,
    value: string
  }[]
}


const Radio = ({name, label, options, ...rest}: Props) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({field}: FieldProps) => {
          console.log('field: ', field);
          return options?.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  id={option.value}
                  type='radio'
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
        
      </Field>
      <ErrorMessage name={name} />
    </div>
  )
}

export default Radio