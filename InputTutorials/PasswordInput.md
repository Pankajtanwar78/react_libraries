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
