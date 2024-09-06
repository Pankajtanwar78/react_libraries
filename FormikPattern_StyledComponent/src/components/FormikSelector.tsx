import Input from './Input';
import Select from './Select';
import Radio from './Radio';

type Props = {
  name: string;
  label: string;
  type?: string;
  selector: string;
  options?: {
    key: string,
    value: string
  }[]
}

const FormikSelector = ({selector, ...rest}: Props) => {
  switch(selector){
    case 'input':
      return <Input {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
  }
}

export default FormikSelector