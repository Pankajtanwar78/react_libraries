# Email Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., email).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected input.
- `pattern`: Specifies a regular expression for email validation.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EmailInputSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const EmailInputForm: React.FC = () => (
  <Formik
    initialValues={{ email: '' }}
    validationSchema={EmailInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="email">Email:</label>
        <Field
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
        />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default EmailInputForm;