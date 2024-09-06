# HTML Input Field Attributes

HTML `<input>` elements come with a variety of attributes that control their behavior, appearance, and validation. Here’s a comprehensive list of attributes and their explanations:

## Common Input Field Attributes

### `type`
- **Description**: Specifies the type of input element to display (e.g., text, password, email).
- **Examples**: `text`, `password`, `email`, `number`, `checkbox`, `radio`, `file`, `date`, etc.

### `id`
- **Description**: Provides a unique identifier for the input element.
- **Usage**: Used to associate the input with a label and for JavaScript interactions.

### `name`
- **Description**: Defines the name of the input element, used to identify the data when a form is submitted.
- **Usage**: Essential for form submission and server-side processing.

### `value`
- **Description**: Specifies the initial value of the input element.
- **Usage**: For fields like `text`, `password`, `email`, etc. It is used to set or get the value programmatically.

### `placeholder`
- **Description**: Provides a hint or example of the expected input.
- **Usage**: Displayed inside the input field when it is empty.

### `required`
- **Description**: Indicates that the input field must be filled out before submitting the form.
- **Usage**: When included, it enforces the field to be non-empty.

### `disabled`
- **Description**: Disables the input field, making it unmodifiable and not included in form submission.
- **Usage**: Used to prevent user interaction.

### `readonly`
- **Description**: Makes the input field non-editable but still selectable.
- **Usage**: Allows the field to be focused and its value to be copied but not modified.

### `maxlength`
- **Description**: Limits the number of characters that can be entered into the input field.
- **Usage**: Useful for restricting input length, such as for usernames or passwords.

### `minlength`
- **Description**: Specifies the minimum number of characters required in the input field.
- **Usage**: Used to enforce minimum length requirements for inputs.

### `pattern`
- **Description**: Defines a regular expression that the input’s value must match.
- **Usage**: Used for custom validation of input values.

### `min`
- **Description**: Specifies the minimum value for `number`, `range`, `date`, `datetime`, `month`, `week`, and `time` input types.
- **Usage**: Enforces minimum value constraints.

### `max`
- **Description**: Specifies the maximum value for `number`, `range`, `date`, `datetime`, `month`, `week`, and `time` input types.
- **Usage**: Enforces maximum value constraints.

### `step`
- **Description**: Defines the legal number intervals for `number` and `range` input types.
- **Usage**: Specifies steps between values, useful for number inputs.

### `autocomplete`
- **Description**: Controls the browser’s autocomplete feature for the input field.
- **Values**: `on`, `off`, or specific types like `name`, `email`, `username`, etc.

### `form`
- **Description**: Associates the input element with a form element that is not its parent.
- **Usage**: Useful when inputs are outside of the form they are meant to be submitted with.

### `formaction`
- **Description**: Specifies the URL where the form data will be sent when the input is used as a submit button.
- **Usage**: Overrides the form’s `action` attribute.

### `formenctype`
- **Description**: Defines how form data should be encoded when submitting.
- **Values**: `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`.

### `formmethod`
- **Description**: Specifies the HTTP method (GET or POST) to be used when submitting the form.
- **Values**: `get`, `post`.

### `formnovalidate`
- **Description**: Disables form validation for the input element when used as a submit button.
- **Usage**: Useful for bypassing validation.

### `formtarget`
- **Description**: Specifies where to open the response after form submission.
- **Values**: `_self`, `_blank`, `_parent`, `_top`, or a specific target frame.

### `multiple`
- **Description**: Allows multiple values to be selected for `file` and `email` input types.
- **Usage**: Used to enable selection of multiple files or email addresses.

### `size`
- **Description**: Sets the width of the input field in characters.
- **Usage**: Primarily used with `text`, `password`, `search`, and `tel` input types.

### `pattern`
- **Description**: Defines a regex pattern the input value must match.
- **Usage**: For custom validation constraints.

## Summary

- **Automatic Management**: Formik automatically manages the following properties: `value`, `onChange`, `onBlur`, and `ref`.
- **Explicitly Provided**: For proper rendering and functionality, you need to explicitly provide `name`, `type`, and optionally `id`.





# Hidden Input

**Mandatory Fields:**
- `id`: Associates label with input (for accessibility, although hidden inputs don't display).
- `name`: For form submission.
- `value`: Controls hidden input value.

**Nice-to-Have Fields:**
- `defaultValue`: Sets the initial value.

# HiddenInput.tsx

```typescript
import React, { useState } from 'react';

const HiddenInput: React.FC = () => {
  const [value, setValue] = useState<string>('hiddenValue');

  return (
    <div>
      <label htmlFor="hiddenInput" style={{ display: 'none' }}>Hidden Input:</label>
      <input
        type="hidden"
        id="hiddenInput"
        name="hiddenInput"
        value={value}
      />
    </div>
  );
};

export default HiddenInput;
```




# Password Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls input value.
- `onChange`: Updates state.
- `type="password"`: Provides a password input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected value.
- `required`: Marks the field as mandatory.
- `minLength`: Requires a minimum number of characters.
- `maxLength`: Limits the number of characters.

# PasswordInput.tsx

```typescript
import React, { useState } from 'react';

const PasswordInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (value.length < 6) {
      setError('Password must be at least 6 characters long.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="passwordInput">Password Input:</label>
      <input
        type="password"
        id="passwordInput"
        name="passwordInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter password"
        required
        minLength={6}
        maxLength={20}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default PasswordInput;
```




# Telephone Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls phone number input.
- `onChange`: Updates state.
- `type="tel"`: Provides a telephone input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.
- `pattern`: Specifies a regex pattern for validation.

# TelephoneInput.tsx

```typescript
import React, { useState } from 'react';

const TelephoneInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
    if (!phoneRegex.test(value)) {
      setError('Please enter a valid phone number.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="telephoneInput">Telephone Input:</label>
      <input
        type="tel"
        id="telephoneInput"
        name="telephoneInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter phone number"
        pattern="[0-9]{10}"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default TelephoneInput;
```




# Color Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected color.
- `onChange`: Updates state.
- `type="color"`: Provides a color picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.

# ColorInput.tsx

```typescript
import React, { useState } from 'react';

const ColorInput: React.FC = () => {
  const [value, setValue] = useState<string>('#ff0000');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (!/^#[0-9a-fA-F]{6}$/.test(value)) {
      setError('Please enter a valid hex color.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="colorInput">Color Input:</label>
      <input
        type="color"
        id="colorInput"
        name="colorInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select color"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default ColorInput;
```




# Month Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected month.
- `onChange`: Updates state.
- `type="month"`: Provides a month picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest month.
- `max`: Specifies the latest month.
- `placeholder`: Provides a hint to the user.

# MonthInput.tsx

```typescript
import React, { useState } from 'react';

const MonthInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (!value) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="monthInput">Month Input:</label>
      <input
        type="month"
        id="monthInput"
        name="monthInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select month"
        min="2020-01"
        max="2099-12"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default MonthInput;
```




# Email Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls input value.
- `onChange`: Updates state.
- `type="email"`: Ensures valid email format.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected value.
- `required`: Marks the field as mandatory.
- `pattern`: Defines a regular expression for validation.

# EmailInput.tsx

```typescript
import React, { useState } from 'react';

const EmailInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setError('Invalid email address.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="emailInput">Email Input:</label>
      <input
        type="email"
        id="emailInput"
        name="emailInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default EmailInput;
```




# Text Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls input value.
- `onChange`: Updates state.
- `type="text"`: Provides a text input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected value.
- `required`: Marks the field as mandatory.
- `maxLength`: Limits the number of characters.
- `minLength`: Requires a minimum number of characters.

# TextInput.tsx

```typescript
import React, { useState } from 'react';

const TextInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (value.trim() === '') {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="textInput">Text Input:</label>
      <input
        type="text"
        id="textInput"
        name="textInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter text"
        required
        maxLength={100}
        minLength={3}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default TextInput;
```




# Radio Input

**Mandatory Fields:**
- `id`: Associates label with radio button.
- `name`: Groups radio buttons together.
- `value`: Specifies the value of the radio button.
- `checked`: Controls the selected state of the radio button.
- `onChange`: Updates state.
- `type="radio"`: Provides a radio button input.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `disabled`: Disables the radio button.

# RadioInput.tsx

```typescript
import React, { useState } from 'react';

interface RadioInputProps {
  options: { id: string; name: string; value: string; checked: boolean; disabled?: boolean }[];
}

const RadioInput: React.FC<RadioInputProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string>(options.find(option => option.checked)?.value || '');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleBlur = () => {
    // Optional: Implement specific validation or checks if needed
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.id}>
          <label>
            <input
              type="radio"
              id={option.id}
              name="radioGroup"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={option.disabled}
            />
            {option.name}
          </label>
        </div>
      ))}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default RadioInput;
```




# Range Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls slider position.
- `onChange`: Updates state.
- `type="range"`: Provides a slider.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the minimum value.
- `max`: Specifies the maximum value.
- `step`: Defines the step size for increments.
- `defaultValue`: Sets the initial value.

# RangeInput.tsx

```typescript
import React, { useState } from 'react';

const RangeInput: React.FC = () => {
  const [value, setValue] = useState<number>(50);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;
    if (newValue >= 0 && newValue <= 100) {
      setValue(newValue);
      setError(null);
    } else {
      setError('Value out of range.');
    }
  };

  const handleBlur = () => {
    if (value < 0 || value > 100) {
      setError('Value must be between 0 and 100.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="rangeInput">Range Input:</label>
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        min={0}
        max={100}
        step={1}
      />
      <span>{value}</span>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default RangeInput;
```




# Number Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls input value.
- `onChange`: Updates state.
- `type="number"`: Ensures numeric input.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected value.
- `min`: Specifies the minimum value.
- `max`: Specifies the maximum value.
- `step`: Defines the step size for increments.

# NumberInput.tsx

```typescript
import React, { useState } from 'react';

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;
    if (!isNaN(newValue)) {
      setValue(newValue);
      setError(null);
    } else {
      setError('Please enter a valid number.');
    }
  };

  const handleBlur = () => {
    if (value === '' || isNaN(value)) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="numberInput">Number Input:</label>
      <input
        type="number"
        id="numberInput"
        name="numberInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter number"
        min={0}
        max={100}
        step={1}
        required
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default NumberInput;
```




# Textarea Input

**Mandatory Fields:**
- `id`: Associates label with textarea.
- `name`: For form submission.
- `value`: Controls textarea value.
- `onChange`: Updates state.
- `rows`: Specifies the number of visible text lines.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.
- `cols`: Specifies the visible width of the textarea.
- `maxLength`: Limits the number of characters.

# TextareaInput.tsx

```typescript
import React, { useState } from 'react';

const TextareaInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (!value) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="textareaInput">Textarea Input:</label>
      <textarea
        id="textareaInput"
        name="textareaInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        rows={4}
        placeholder="Enter text"
        maxLength={500}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default TextareaInput;
```




# Time Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected time.
- `onChange`: Updates state.
- `type="time"`: Provides a time picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest time.
- `max`: Specifies the latest time.
- `placeholder`: Provides a hint to the user.

# TimeInput.tsx

```typescript
import React, { useState } from 'react';

const TimeInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (!value) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="timeInput">Time Input:</label>
      <input
        type="time"
        id="timeInput"
        name="timeInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select time"
        min="00:00"
        max="23:59"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default TimeInput;
```




# Date Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected date.
- `onChange`: Updates state.
- `type="date"`: Provides a date picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest date.
- `max`: Specifies the latest date.
- `placeholder`: Provides a hint to the user.

# DateInput.tsx

```typescript
import React, { useState } from 'react';

const DateInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (!value) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="dateInput">Date Input:</label>
      <input
        type="date"
        id="dateInput"
        name="dateInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select date"
        min="2000-01-01"
        max="2099-12-31"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default DateInput;
```




# Checkbox Input

**Mandatory Fields:**
- `id`: Associates label with checkbox.
- `name`: For form submission.
- `checked`: Controls the checkbox state.
- `onChange`: Updates state.
- `type="checkbox"`: Provides a checkbox input.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `value`: Specifies the value of the checkbox when selected.
- `disabled`: Disables the checkbox.

# CheckboxInput.tsx

```typescript
import React, { useState } from 'react';

interface CheckboxInputProps {
  options: { id: string; name: string; checked: boolean; value?: string; disabled?: boolean }[];
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ options }) => {
  const [checkedValues, setCheckedValues] = useState<{ [key: string]: boolean }>(
    options.reduce((acc, option) => ({ ...acc, [option.id]: option.checked }), {})
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValues((prev) => ({
      ...prev,
      [event.target.id]: event.target.checked
    }));
  };

  const handleBlur = () => {
    // Optional: Implement specific validation or checks if needed
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.id}>
          <label htmlFor={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name={option.name}
              checked={checkedValues[option.id]}
              onChange={handleChange}
              onBlur={handleBlur}
              value={option.value}
              disabled={option.disabled}
            />
            {option.name}
          </label>
        </div>
      ))}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default CheckboxInput;
```




# File Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `onChange`: Updates state when file is selected.
- `type="file"`: Allows file selection.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `accept`: Specifies acceptable file types.
- `multiple`: Allows selection of multiple files.

# FileInput.tsx

```typescript
import React, { useState } from 'react';

const FileInput: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    } else {
      setError('No file selected.');
    }
  };

  const handleBlur = () => {
    if (!file) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">File Input:</label>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        onChange={handleChange}
        onBlur={handleBlur}
        accept=".jpg,.png,.pdf"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileInput;
```




# URL Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls URL input.
- `onChange`: Updates state.
- `type="url"`: Provides a URL input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.

# URLInput.tsx

```typescript
import React, { useState } from 'react';

const URLInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    try {
      new URL(value);
      setError(null);
    } catch {
      setError('Please enter a valid URL.');
    }
  };

  return (
    <div>
      <label htmlFor="urlInput">URL Input:</label>
      <input
        type="url"
        id="urlInput"
        name="urlInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter URL"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default URLInput;
```




# Week Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected week.
- `onChange`: Updates state.
- `type="week"`: Provides a week picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest week.
- `max`: Specifies the latest week.
- `placeholder`: Provides a hint to the user.

# WeekInput.tsx

```typescript
import React, { useState } from 'react';

const WeekInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (!value) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="weekInput">Week Input:</label>
      <input
        type="week"
        id="weekInput"
        name="weekInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select week"
        min="2020-W01"
        max="2099-W52"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default WeekInput;
```





### Select Input

```markdown
# Select Input

**Mandatory Fields:**
- `id`: Associates label with select input.
- `name`: For form submission.
- `value`: Controls the selected option.
- `onChange`: Updates state.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.
- `disabled`: Disables the select input.

# SelectInput.tsx

```typescript
import React, { useState } from 'react';

interface SelectInputProps {
  options: { value: string; label: string; disabled?: boolean }[];
}

const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleBlur = () => {
    if (!selectedValue) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="selectInput">Select Input:</label>
      <select
        id="selectInput"
        name="selectInput"
        value={selectedValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select an option"
        disabled={false} // Example of disabled field
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default SelectInput;
```




# Search Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls input value.
- `onChange`: Updates state.
- `type="search"`: Provides a search input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected value.
- `required`: Marks the field as mandatory.

# SearchInput.tsx

```typescript
import React, { useState } from 'react';

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (value.trim() === '') {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="searchInput">Search Input:</label>
      <input
        type="search"
        id="searchInput"
        name="searchInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Search..."
        required
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default SearchInput;
```
