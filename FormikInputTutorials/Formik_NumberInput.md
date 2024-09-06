# Number Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., number).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the minimum value allowed.
- `max`: Specifies the maximum value allowed.
- `step`: Specifies the step size for the input.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NumberInputSchema = Yup.object().shape({
  numberInput: Yup.number().required('Required').min(1, 'Value must be at least 1').max(100, 'Value must be at most 100'),
});

const NumberInputForm: React.FC = () => (
  <Formik
    initialValues={{ numberInput: '' }}
    validationSchema={NumberInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="numberInput">Number Input:</label>
        <Field
          type="number"
          id="numberInput"
          name="numberInput"
          min={1}
          max={100}
          step={1}
        />
        <ErrorMessage name="numberInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default NumberInputForm;