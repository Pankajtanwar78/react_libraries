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
