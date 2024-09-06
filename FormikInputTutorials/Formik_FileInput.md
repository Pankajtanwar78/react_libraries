# File Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., file).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `accept`: Specifies the types of files that the server accepts.
- `multiple`: Allows multiple files to be selected.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FileInputSchema = Yup.object().shape({
  fileInput: Yup.mixed().required('Required'),
});

const FileInputForm: React.FC = () => (
  <Formik
    initialValues={{ fileInput: null }}
    validationSchema={FileInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="fileInput">File Input:</label>
        <Field
          type="file"
          id="fileInput"
          name="fileInput"
          accept=".jpg,.png"
        />
        <ErrorMessage name="fileInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default FileInputForm;