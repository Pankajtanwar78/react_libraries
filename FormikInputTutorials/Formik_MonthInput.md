# Month Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., month).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest month that can be selected.
- `max`: Specifies the latest month that can be selected.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MonthInputSchema = Yup.object().shape({
  monthInput: Yup.string().required('Required'),
});

const MonthInputForm: React.FC = () => (
  <Formik
    initialValues={{ monthInput: '' }}
    validationSchema={MonthInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="monthInput">Month Input:</label>
        <Field
          type="month"
          id="monthInput"
          name="monthInput"
        />
        <ErrorMessage name="monthInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default MonthInputForm;