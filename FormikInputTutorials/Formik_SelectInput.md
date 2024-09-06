# Select Input Formik Component

**Mandatory Fields:**
- `as`: Specifies the type of input (e.g., select).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `value`: Sets the initial value of the select input.
- `onChange`: Handles select change events.
- `onBlur`: Handles blur events.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SelectInputSchema = Yup.object().shape({
  selectInput: Yup.string().required('Required'),
});

const options = [
  { value: '', label: 'Select an option' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const SelectInputForm: React.FC = () => (
  <Formik
    initialValues={{ selectInput: '' }}
    validationSchema={SelectInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="selectInput">Select Input:</label>
        <Field as="select" id="selectInput" name="selectInput">
          {options.map(option => (
            <option key={option.value} value={option.value} label={option.label} />
          ))}
        </Field>
        <ErrorMessage name="selectInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default SelectInputForm;