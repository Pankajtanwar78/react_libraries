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
