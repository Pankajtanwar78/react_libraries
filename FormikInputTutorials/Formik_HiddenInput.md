# Hidden Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., hidden).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `value`: Specifies the value of the hidden input.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const HiddenInputSchema = Yup.object().shape({
  hiddenInput: Yup.string().required('Required'),
});

const HiddenInputForm: React.FC = () => (
  <Formik
    initialValues={{ hiddenInput: 'hiddenValue' }}
    validationSchema={HiddenInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <Field
        type="hidden"
        id="hiddenInput"
        name="hiddenInput"
      />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default HiddenInputForm;