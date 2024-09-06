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
