import { ErrorMessage, Field } from 'formik';


type Props = {
  name: string;
  label: string;
  type?: string;
  
}

const Input = ({name, label, ...rest}: Props) => {
  
    if(name === 'description'){
      return (<div>
        <label htmlFor={name}>{label}</label> 
        <Field as="textarea" id={name} name={name} {...rest}/>
        <ErrorMessage name={name} />
      </div>)
    } 
    else{
      return (<div>
        <label htmlFor={name}>{label}</label> 
        <Field id={name} name={name} {...rest}/>
        <ErrorMessage name={name} />
      </div>)
    }
}

export default Input