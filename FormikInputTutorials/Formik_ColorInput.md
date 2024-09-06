# Color Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., color).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `value`: Sets the initial color value.
- `onChange`: Handles color change events.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ColorInputSchema = Yup.object().shape({
  colorInput: Yup.string().required('Required'),
});

const ColorInputForm: React.FC = () => (
  <Formik
    initialValues={{ colorInput: '#000000' }}
    validationSchema={ColorInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="colorInput">Color Input:</label>
        <Field
          type="color"
          id="colorInput"
          name="colorInput"
        />
        <ErrorMessage name="colorInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default ColorInputForm;