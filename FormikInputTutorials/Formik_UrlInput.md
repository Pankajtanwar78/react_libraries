# URL Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., url).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected URL format.
- `pattern`: Specifies a pattern for the URL validation.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UrlInputSchema = Yup.object().shape({
  urlInput: Yup.string().url('Invalid URL').required('Required'),
});

const UrlInputForm: React.FC = () => (
  <Formik
    initialValues={{ urlInput: '' }}
    validationSchema={UrlInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="urlInput">URL Input:</label>
        <Field
          type="url"
          id="urlInput"
          name="urlInput"
          placeholder="https://example.com"
        />
        <ErrorMessage name="urlInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default UrlInputForm;