# Text Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., text).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected input.
- `maxLength`: Limits the number of characters that can be entered.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TextInputSchema = Yup.object().shape({
  textInput: Yup.string().required('Required').max(100, 'Input exceeds maximum length of 100 characters.'),
});

const TextInputForm: React.FC = () => (
  <Formik
    initialValues={{ textInput: '' }}
    validationSchema={TextInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="textInput">Text Input:</label>
        <Field
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Enter text"
          maxLength={100}
        />
        <ErrorMessage name="textInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default TextInputForm;