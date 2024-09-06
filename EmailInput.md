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
