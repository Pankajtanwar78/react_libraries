# Week Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., week).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest week that can be selected.
- `max`: Specifies the latest week that can be selected.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const WeekInputSchema = Yup.object().shape({
  weekInput: Yup.date().required('Required'),
});

const WeekInputForm: React.FC = () => (
  <Formik
    initialValues={{ weekInput: '' }}
    validationSchema={WeekInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="weekInput">Week Input:</label>
        <Field
          type="week"
          id="weekInput"
          name="weekInput"
        />
        <ErrorMessage name="weekInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default WeekInputForm;