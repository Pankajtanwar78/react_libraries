# Date Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., date).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest date allowed.
- `max`: Specifies the latest date allowed.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DateInputSchema = Yup.object().shape({
  dateInput: Yup.date().required('Required'),
});

const DateInputForm: React.FC = () => (
  <Formik
    initialValues={{ dateInput: '' }}
    validationSchema={DateInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="dateInput">Date Input:</label>
        <Field
          type="date"
          id="dateInput"
          name="dateInput"
        />
        <ErrorMessage name="dateInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default DateInputForm;