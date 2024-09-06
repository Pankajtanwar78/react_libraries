# Comprehensive Guide to `<input>` Elements in React

## Introduction

In React, `<input>` elements are used for various types of user input, such as text, passwords, numbers, and more. React manages `<input>` elements with a combination of properties, event handlers, and state management techniques.

## Properties of `<input>` in React

The `<input>` element supports numerous properties to control its behavior and appearance. Here are the commonly used properties:

### Commonly Used Attributes

- **`value`**:
  - Defines the current value of the input field. This is crucial for controlled components.
  - Example:
    ```jsx
    <input type="text" value={inputValue} onChange={handleChange} />
    ```

- **`type`**:
  - Specifies the type of input (text, email, password, etc.).
  - Example:
    ```jsx
    <input type="email" value={email} onChange={handleEmailChange} />
    ```

- **`placeholder`**:
  - Provides placeholder text displayed when the input is empty.
  - Example:
    ```jsx
    <input type="text" placeholder="Enter your name" />
    ```

- **`disabled`**:
  - Disables the input field, making it uneditable.
  - Example:
    ```jsx
    <input type="text" disabled />
    ```

- **`checked`** (for checkboxes or radio buttons):
  - Indicates whether a checkbox or radio button is checked.
  - Example:
    ```jsx
    <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
    ```

- **`min`, `max`, `step`** (for `number`, `date`, `range`, etc.):
  - Defines the minimum, maximum, and step values for numeric or date inputs.
  - Example:
    ```jsx
    <input type="number" value={age} onChange={handleAgeChange} min="1" max="100" />
    ```

- **`readOnly`**:
  - Makes the input read-only, preventing user modifications.
  - Example:
    ```jsx
    <input type="text" value={readOnlyValue} readOnly />
    ```

- **`required`**:
  - Marks the field as required for form submission.
  - Example:
    ```jsx
    <input type="email" value={email} onChange={handleEmailChange} required />
    ```

- **`autoFocus`**:
  - Automatically focuses the input element when the page loads.
  - Example:
    ```jsx
    <input type="text" autoFocus />
    ```

- **`form`**:
  - Associates the input with a specific `<form>` element.
  - Example:
    ```jsx
    <input type="text" form="myForm" />
    ```

- **`formAction`**:
  - Specifies the URL for form submission when the input is a submit button.
  - Example:
    ```jsx
    <input type="submit" formAction="/submit" />
    ```

- **`formMethod`**:
  - Specifies the HTTP method for form submission.
  - Example:
    ```jsx
    <input type="submit" formMethod="post" />
    ```

- **`formTarget`**:
  - Specifies where to open the form results (e.g., in a new tab).
  - Example:
    ```jsx
    <input type="submit" formTarget="_blank" />
    ```

- **`list`**:
  - Associates the input with a `<datalist>` element for autocomplete suggestions.
  - Example:
    ```jsx
    <input type="text" list="suggestions" />
    <datalist id="suggestions">
      <option value="Option 1" />
      <option value="Option 2" />
    </datalist>
    ```

- **`multiple`**:
  - Allows multiple values to be selected for inputs like file uploads.
  - Example:
    ```jsx
    <input type="file" multiple />
    ```

### Specialized Input Types

- **Password Input**:
  ```jsx
  <input type="password" placeholder="Enter password" />
  ```

- **File Input**:
  ```jsx
  <input type="file" multiple />
  ```

- **Color Input**:
  ```jsx
  <input type="color" value="#ff0000" />
  ```

- **Range Input**:
  ```jsx
  <input type="range" min="0" max="100" step="10" />
  ```

- **Date Input**:
  ```jsx
  <input type="date" />
  ```

## Event Handling in React for `<input>`

React provides ways to handle events for `<input>` elements using camelCase event names and an event object.

### Common Input Events

- **`onChange`**:
  - Handles changes in the input field's value.
  - Example:
    ```jsx
    const handleChange = (e) => {
      console.log(e.target.value);
    };

    <input type="text" onChange={handleChange} />
    ```

- **`onBlur` and `onFocus`**:
  - Handles focus and blur events when the input gains or loses focus.
  - Example:
    ```jsx
    const handleFocus = () => console.log('Focused!');
    const handleBlur = () => console.log('Blurred!');

    <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    ```

- **`onInput`**:
  - Fired when the input value changes, more immediately than `onChange`.
  - Example:
    ```jsx
    const handleInput = (e) => console.log('Input: ', e.target.value);

    <input type="text" onInput={handleInput} />
    ```

- **`onKeyDown`, `onKeyUp`, `onKeyPress`**:
  - Handles key press events.
  - Example:
    ```jsx
    const handleKeyDown = (e) => console.log('Key Down: ', e.key);
    const handleKeyUp = (e) => console.log('Key Up: ', e.key);
    const handleKeyPress = (e) => console.log('Key Press: ', e.key);

    <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onKeyPress={handleKeyPress} />
    ```

- **`onPaste`**:
  - Fired when content is pasted into the input.
  - Example:
    ```jsx
    const handlePaste = (e) => console.log('Pasted content:', e.clipboardData.getData('text'));

    <input type="text" onPaste={handlePaste} />
    ```

- **`onCut`**:
  - Fired when content is cut from the input.
  - Example:
    ```jsx
    const handleCut = (e) => console.log('Cut content:', e.clipboardData.getData('text'));

    <input type="text" onCut={handleCut} />
    ```

- **`onCopy`**:
  - Fired when content is copied from the input.
  - Example:
    ```jsx
    const handleCopy = (e) => console.log('Copied content:', e.clipboardData.getData('text'));

    <input type="text" onCopy={handleCopy} />
    ```

## Managing State in React

To manage the state of `<input>` elements in React, you typically use the `useState` hook for controlled components or `useRef` for uncontrolled components.

### Controlled Components

Controlled components manage their value through React state. Changes to the input value are reflected in the component's state.

- **Example**:
  ```jsx
  import React, { useState } from 'react';

  function ControlledInput() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <input type="text" value={value} onChange={handleChange} />
    );
  }
  ```

### Uncontrolled Components

Uncontrolled components manage their value through the DOM, using `useRef` to access the input value.

- **Example**:
  ```jsx
  import React, { useRef } from 'react';

  function UncontrolledInput() {
    const inputRef = useRef(null);

    const handleSubmit = () => {
      alert('A name was submitted: ' + inputRef.current.value);
    };

    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  ```

## Methods and Ref Handling

React allows you to programmatically interact with `<input>` elements using refs.

- **`focus()`**: Programmatically focuses the input.
  ```jsx
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  ```

- **`select()`**: Selects the text within the input.
  ```jsx
  const selectText = () => {
    inputRef.current.select();
  };
  ```

- **`setSelectionRange(start, end)`**: Sets a specific range for text selection.
  ```jsx
  const setRange = () => {
    inputRef.current.setSelectionRange(0,

 3);
  };
  ```

- **`checkValidity()`**: Checks if the input's value meets the constraints set by the `required`, `minLength`, `maxLength`, etc.
  ```jsx
  const checkInputValidity = () => {
    if (!inputRef.current.checkValidity()) {
      alert('Input is invalid');
    }
  };
  ```

- **`reportValidity()`**: Displays validation messages if the input is invalid.
  ```jsx
  const reportValidity = () => {
    inputRef.current.reportValidity();
  };
  ```

## Validation

Input validation ensures that the input value meets certain criteria before submission.

- **Example**:
  ```jsx
  import React, { useState } from 'react';

  function ValidatedInput() {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const validateInput = (value) => {
      if (value.length < 3) {
        setError('Input must be at least 3 characters long');
      } else {
        setError('');
      }
    };

    const handleChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
      validateInput(newValue);
    };

    return (
      <div>
        <input type="text" value={value} onChange={handleChange} />
        {error && <span>{error}</span>}
      </div>
    );
  }
  ```

## Summary

React handles `<input>` elements using a combination of properties, event handling, state management, and validation techniques. Key concepts include:

- **Properties**: Define the input's appearance and behavior.
- **Event Handling**: Respond to user interactions with various events.
- **State Management**: Control and manage input values with controlled and uncontrolled components.
- **Methods**: Programmatic control of input elements using refs.
- **Validation**: Ensure input values meet specified constraints before submission.






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




