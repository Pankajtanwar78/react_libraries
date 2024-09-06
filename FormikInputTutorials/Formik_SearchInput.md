# Search Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., search).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected input.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SearchInputSchema = Yup.object().shape({
  searchInput: Yup.string().required('Required'),
});

const SearchInputForm: React.FC = () => (
  <Formik
    initialValues={{ searchInput: '' }}
    validationSchema={SearchInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="searchInput">Search Input:</label>
        <Field
          type="search"
          id="searchInput"
          name="searchInput"
          placeholder="Search..."
        />
        <ErrorMessage name="searchInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default SearchInputForm;