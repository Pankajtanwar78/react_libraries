import { Field } from 'formik';

type Props = {
  name: string;
  label: string;
  type?: string;
  options?: {
    key: string,
    value: string
  }[]
}

const Select = ({name, label, options, ...rest}: Props) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>{option.key}</option>
        ))}
      </Field>
    </div>
  )
}

export default Select