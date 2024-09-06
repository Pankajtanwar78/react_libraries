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
