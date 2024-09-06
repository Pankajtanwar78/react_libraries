# Checkbox Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., checkbox).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `value`: Specifies the value of the checkbox when checked.
- `checked`: Controls whether the checkbox is checked or not.
- `onChange`: Handles changes to the checkbox state.
- `disabled`: Disables the checkbox.
- `label`: Provides a label for the checkbox.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

const CheckboxInputSchema = Yup.object().shape({
  checkboxInputs: Yup.array().of(Yup.string()).required('At least one checkbox must be selected'),
});

const CheckboxInputForm: React.FC = () => (
  <Formik
    initialValues={{ checkboxInputs: [] }}
    validationSchema={CheckboxInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ values }) => (
      <Form>
        <div>
          <label>Checkbox Inputs:</label>
          <FieldArray
            name="checkboxInputs"
            render={arrayHelpers => (
              <>
                {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, index) => (
                  <div key={index}>
                    <label>
                      <Field
                        type="checkbox"
                        name="checkboxInputs"
                        value={option}
                      />
                      {option}
                    </label>
                  </div>
                ))}
                <ErrorMessage name="checkboxInputs" component="div" style={{ color: 'red' }} />
              </>
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default CheckboxInputForm;
