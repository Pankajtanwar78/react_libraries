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
