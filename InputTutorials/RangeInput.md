# Range Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls slider position.
- `onChange`: Updates state.
- `type="range"`: Provides a slider.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the minimum value.
- `max`: Specifies the maximum value.
- `step`: Defines the step size for increments.
- `defaultValue`: Sets the initial value.

# RangeInput.tsx

```typescript
import React, { useState } from 'react';

const RangeInput: React.FC = () => {
  const [value, setValue] = useState<number>(50);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;
    if (newValue >= 0 && newValue <= 100) {
      setValue(newValue);
      setError(null);
    } else {
      setError('Value out of range.');
    }
  };

  const handleBlur = () => {
    if (value < 0 || value > 100) {
      setError('Value must be between 0 and 100.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="rangeInput">Range Input:</label>
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        min={0}
        max={100}
        step={1}
      />
      <span>{value}</span>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default RangeInput;
