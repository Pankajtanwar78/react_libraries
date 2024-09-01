import { StyledForm, StyledFormError } from "../styles/Form.styles"
import { useFormik } from "formik"
import * as Yup from "yup"


type formValues = {
  name: string,
  email: string,
  channel: string
}

// type formErrors = {
//   name?: string,
//   email?: string,
//   channel?: string
// }

const initialValues: formValues = {
  name: "",
  email: "",
  channel: ""
}

const onSubmit = (values: formValues) => {
  console.log(values)
}



// const validate = (values: formValues) => {
//   let errors: formErrors = {};
  
//   if (!values.name){
//     errors.name = 'Required';
//   }

//   if (!values.email){
//     errors.email = 'Required';
//   }

//   if (!values.channel){
//     errors.channel = 'Required';
//   }

//   return errors;
// }

const validationSchema = Yup.object({
  name: Yup.string().required('Required name input'),
  email: Yup.string().email('Invalid input').required('Required email input'),
  channel: Yup.string().required('Required channel input')
})

export default function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });

  console.log(formik.touched)


  return (
    <StyledForm onSubmit={formik.handleSubmit} >
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}/>
            {formik.touched.name && formik.errors.name ? <StyledFormError>{formik.errors.name}</StyledFormError> : null}
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}></input>
            {formik.touched.email && formik.errors.email ? <StyledFormError>{formik.errors.email}</StyledFormError> : null}
        </div>

        <div>
            <label htmlFor="channel">Channel</label>
            <input
                type="text"
                id="channel"
                name="channel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.channel}></input>
            {formik.touched.channel && formik.errors.channel ? <StyledFormError>{formik.errors.channel}</StyledFormError> : null}
        </div>
        <button>Submit</button>
    </StyledForm>
  )
}