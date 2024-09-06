# Range Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., range).
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

const RangeInputSchema = Yup.object().shape({
  rangeInput: Yup.number().required('Required').min(0, 'Value must be at least 0').max(100, 'Value must be at most 100'),
});

const RangeInputForm: React.FC = () => (
  <Formik
    initialValues={{ rangeInput: 50 }}
    validationSchema={RangeInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="rangeInput">Range Input:</label>
        <Field
          type="range"
          id="rangeInput"
          name="rangeInput"
          min={0}
          max={100}
          step={1}
        />
        <ErrorMessage name="rangeInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default RangeInputForm;