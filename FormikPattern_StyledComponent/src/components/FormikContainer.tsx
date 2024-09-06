import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikSelector from "./FormikSelector";

interface Props{
  name: string;
  email: string;
  password: string;
  description: string;
  selectOption: string;
}

const dropdownOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]

const radioOptions = [
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]

const initialValues = {
  name: '',
  email: '',
  password: '',
  description: '',
  selectOption: '',
  radioOption: ''
}

const onSubmit = (values: Props) => {
  console.log(values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required name input'),
  email: Yup.string().email('Invalid input').required('Required email input'),
  password: Yup.string().required('Required password input'),
  description: Yup.string().required('Required textaria input'),
  selectOption: Yup.string().required('Required select input'),
  radioOption: Yup.string().required('Required radio input')
})

const FormikContainer = () => {
  return <Formik 
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {
      (formik) => {
        console.log('formik: ', formik);
        
        return (
        <Form>
          <FormikSelector
            selector='input'
            name='name'
            label='Name'
            type='text'
          />
          <FormikSelector
            selector='input'
            name='email'
            label='Email'
            type='email'
          />
          <FormikSelector
            selector='input'
            name='password'
            label='Password'
            type='password'
          />
          <FormikSelector
            selector='input'
            name='description'
            label='Description'
          />
          <FormikSelector
            selector='select'
            name='selectOption'
            label='Select a topic'
            options={dropdownOptions}
          />
          <FormikSelector
            selector='radio'
            name='radioOption'
            label='Select an option'
            options={radioOptions}
          />  
          <button type="submit">Submit</button>
        </Form>
      )}
    }
  </Formik>
}

export default FormikContainer;
