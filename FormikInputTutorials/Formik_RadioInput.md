# Radio Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., radio).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `value`: Sets the value of the radio button.
- `checked`: Sets the initial checked state.
- `onChange`: Handles radio change events.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RadioInputSchema = Yup.object().shape({
  radioInput: Yup.string().required('Required'),
});

const RadioInputForm: React.FC = () => (
  <Formik
    initialValues={{ radioInput: '' }}
    validationSchema={RadioInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        {['option1', 'option2', 'option3'].map(option => (
          <label key={option}>
            <Field
              type="radio"
              name="radioInput"
              value={option}
            />
            {`Option ${option.charAt(option.length - 1)}`}
          </label>
        ))}
        <ErrorMessage name="radioInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default RadioInputForm;