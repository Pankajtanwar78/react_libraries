# Time Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., time).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest time allowed.
- `max`: Specifies the latest time allowed.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TimeInputSchema = Yup.object().shape({
  timeInput: Yup.string().required('Required'),
});

const TimeInputForm: React.FC = () => (
  <Formik
    initialValues={{ timeInput: '' }}
    validationSchema={TimeInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="timeInput">Time Input:</label>
        <Field
          type="time"
          id="timeInput"
          name="timeInput"
        />
        <ErrorMessage name="timeInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default TimeInputForm;