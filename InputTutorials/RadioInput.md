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
