# Text Area Input Formik Component

**Mandatory Fields:**
- `id`: Associates the label with the text area.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `rows`: Specifies the number of rows in the text area.
- `cols`: Specifies the number of columns in the text area.
- `placeholder`: Provides a hint to the user about the expected input.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TextAreaInputSchema = Yup.object().shape({
  textAreaInput: Yup.string().required('Required'),
});

const TextAreaInputForm: React.FC = () => (
  <Formik
    initialValues={{ textAreaInput: '' }}
    validationSchema={TextAreaInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="textAreaInput">Text Area Input:</label>
        <Field
          as="textarea"
          id="textAreaInput"
          name="textAreaInput"
          rows={4}
          cols={50}
          placeholder="Enter your text here"
        />
        <ErrorMessage name="textAreaInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default TextAreaInputForm;