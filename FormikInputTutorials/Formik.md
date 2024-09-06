# Formik Field Component Properties

Formik's `Field` component automatically manages several properties, reducing the need for manual handling. Below is a breakdown of properties that Formik manages and those that you need to explicitly provide.

## Properties Automatically Managed by Formik

- **value**:
  - **Description**: The current value of the field is managed by Formik based on the form state, so you do not need to pass it explicitly.

- **onChange**:
  - **Description**: Formik handles the `onChange` event for you, updating the field's value in the form state.

- **onBlur**:
  - **Description**: Formik automatically manages the `onBlur` event to mark the field as touched and handle validation.

- **error and touched**:
  - **Description**: Error messages and touched state are managed by Formik and can be accessed via Formik's `errors` and `touched` objects in the render prop.

- **ref**:
  - **Description**: Formik internally manages the `ref` for fields, so you typically don't need to provide this.

## Properties to Provide Explicitly

- **name**:
  - **Description**: This is necessary for Formik to identify and manage the field but should be provided by the user.

- **type**:
  - **Description**: The type of input (e.g., text, password) is necessary for proper rendering but is not managed by Formik; it should be provided explicitly.

- **id**:
  - **Description**: While it is useful for associating labels with inputs, Formik does not require it and it can be omitted if not needed.

## Example Code

Here's a simplified version of a `Field` component where some properties are automatically managed by Formik, and others are explicitly provided:

```typescript
import React from 'react';
import { Formik, Field, Form } from 'formik';

const MyForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email" // Type is explicitly provided
              id="email" // Not required but useful for labels
              name="email" // Necessary for Formik
              placeholder="Enter your email"
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password" // Type is explicitly provided
              id="password" // Not required but useful for labels
              name="password" // Necessary for Formik
              placeholder="Enter your password"
            />
            {errors.password && touched.password && <div>{errors.password}</div>}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
```

## Summary

- **Automatic Management**: Formik automatically manages `value`, `onChange`, `onBlur`, and `ref` for fields.
- **Explicitly Provided**: You need to explicitly provide `name`, `type`, and `id` for proper rendering and functionality.


![image](https://github.com/user-attachments/assets/4f209f2d-3fe1-49b4-8141-5be2ca519d31)





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

export default TextInputForm;```




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

export default EmailInputForm;```




# Password Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., password).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected input.
- `minLength`: Specifies the minimum length of the password.
- `maxLength`: Limits the number of characters that can be entered.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PasswordInputSchema = Yup.object().shape({
  password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters long'),
});

const PasswordInputForm: React.FC = () => (
  <Formik
    initialValues={{ password: '' }}
    validationSchema={PasswordInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="password">Password:</label>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          minLength={8}
        />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default PasswordInputForm;```




# Number Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., number).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the minimum value allowed.
- `max`: Specifies the maximum value allowed.
- `step`: Specifies the step size for the input.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NumberInputSchema = Yup.object().shape({
  numberInput: Yup.number().required('Required').min(1, 'Value must be at least 1').max(100, 'Value must be at most 100'),
});

const NumberInputForm: React.FC = () => (
  <Formik
    initialValues={{ numberInput: '' }}
    validationSchema={NumberInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="numberInput">Number Input:</label>
        <Field
          type="number"
          id="numberInput"
          name="numberInput"
          min={1}
          max={100}
          step={1}
        />
        <ErrorMessage name="numberInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default NumberInputForm;```




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
```




# Radio Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., radio).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `value`: Sets the value of the radio button.
- `checked`: Sets the initial checked state.
- `onChange`: Handles radio change events.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RadioInputSchema = Yup.object().shape({
  radioInput: Yup.string().required('Required'),
});

const RadioInputForm: React.FC = () => (
  <Formik
    initialValues={{ radioInput: '' }}
    validationSchema={RadioInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        {['option1', 'option2', 'option3'].map(option => (
          <label key={option}>
            <Field
              type="radio"
              name="radioInput"
              value={option}
            />
            {`Option ${option.charAt(option.length - 1)}`}
          </label>
        ))}
        <ErrorMessage name="radioInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default RadioInputForm;```




# Select Input Formik Component

**Mandatory Fields:**
- `as`: Specifies the type of input (e.g., select).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `value`: Sets the initial value of the select input.
- `onChange`: Handles select change events.
- `onBlur`: Handles blur events.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SelectInputSchema = Yup.object().shape({
  selectInput: Yup.string().required('Required'),
});

const options = [
  { value: '', label: 'Select an option' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const SelectInputForm: React.FC = () => (
  <Formik
    initialValues={{ selectInput: '' }}
    validationSchema={SelectInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="selectInput">Select Input:</label>
        <Field as="select" id="selectInput" name="selectInput">
          {options.map(option => (
            <option key={option.value} value={option.value} label={option.label} />
          ))}
        </Field>
        <ErrorMessage name="selectInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default SelectInputForm;```




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

export default TextAreaInputForm;```




# Date Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., date).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest date allowed.
- `max`: Specifies the latest date allowed.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DateInputSchema = Yup.object().shape({
  dateInput: Yup.date().required('Required'),
});

const DateInputForm: React.FC = () => (
  <Formik
    initialValues={{ dateInput: '' }}
    validationSchema={DateInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="dateInput">Date Input:</label>
        <Field
          type="date"
          id="dateInput"
          name="dateInput"
        />
        <ErrorMessage name="dateInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default DateInputForm;```




# Range Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., range).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the minimum value allowed.
- `max`: Specifies the maximum value allowed.
- `step`: Specifies the step size for the input.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RangeInputSchema = Yup.object().shape({
  rangeInput: Yup.number().required('Required').min(0, 'Value must be at least 0').max(100, 'Value must be at most 100'),
});

const RangeInputForm: React.FC = () => (
  <Formik
    initialValues={{ rangeInput: 50 }}
    validationSchema={RangeInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="rangeInput">Range Input:</label>
        <Field
          type="range"
          id="rangeInput"
          name="rangeInput"
          min={0}
          max={100}
          step={1}
        />
        <ErrorMessage name="rangeInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default RangeInputForm;```




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

export default SearchInputForm;```




# Time Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., time).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest time allowed.
- `max`: Specifies the latest time allowed.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TimeInputSchema = Yup.object().shape({
  timeInput: Yup.string().required('Required'),
});

const TimeInputForm: React.FC = () => (
  <Formik
    initialValues={{ timeInput: '' }}
    validationSchema={TimeInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="timeInput">Time Input:</label>
        <Field
          type="time"
          id="timeInput"
          name="timeInput"
        />
        <ErrorMessage name="timeInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default TimeInputForm;```




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

export default ColorInputForm;```




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

export default FileInputForm;```




# Month Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., month).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest month that can be selected.
- `max`: Specifies the latest month that can be selected.

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MonthInputSchema = Yup.object().shape({
  monthInput: Yup.string().required('Required'),
});

const MonthInputForm: React.FC = () => (
  <Formik
    initialValues={{ monthInput: '' }}
    validationSchema={MonthInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="monthInput">Month Input:</label>
        <Field
          type="month"
          id="monthInput"
          name="monthInput"
        />
        <ErrorMessage name="monthInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default MonthInputForm;```




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

export default WeekInputForm;```




# Telephone Input Formik Component

**Mandatory Fields:**
- `type`: Specifies the type of input (e.g., tel).
- `id`: Associates the label with the input field.
- `name`: Used for form submission and to link with Formik state.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected format.
- `pattern`: Specifies a pattern for the input (e.g., phone number format).

## Code

```typescript
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TelephoneInputSchema = Yup.object().shape({
  telephoneInput: Yup.string()
    .required('Required')
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
});

const TelephoneInputForm: React.FC = () => (
  <Formik
    initialValues={{ telephoneInput: '' }}
    validationSchema={TelephoneInputSchema}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <div>
        <label htmlFor="telephoneInput">Telephone Input:</label>
        <Field
          type="tel"
          id="telephoneInput"
          name="telephoneInput"
          placeholder="Enter your phone number"
        />
        <ErrorMessage name="telephoneInput" component="div" style={{ color: 'red' }} />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default TelephoneInputForm;
```




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

export default UrlInputForm;```




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
```
