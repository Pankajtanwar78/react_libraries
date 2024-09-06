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
