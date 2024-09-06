# Number Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls input value.
- `onChange`: Updates state.
- `type="number"`: Ensures numeric input.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected value.
- `min`: Specifies the minimum value.
- `max`: Specifies the maximum value.
- `step`: Defines the step size for increments.

# NumberInput.tsx

```typescript
import React, { useState } from 'react';

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;
    if (!isNaN(newValue)) {
      setValue(newValue);
      setError(null);
    } else {
      setError('Please enter a valid number.');
    }
  };

  const handleBlur = () => {
    if (value === '' || isNaN(value)) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="numberInput">Number Input:</label>
      <input
        type="number"
        id="numberInput"
        name="numberInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter number"
        min={0}
        max={100}
        step={1}
        required
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default NumberInput;
