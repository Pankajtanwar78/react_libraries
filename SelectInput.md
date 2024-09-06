
### Select Input

```markdown
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
