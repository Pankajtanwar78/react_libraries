# Month Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected month.
- `onChange`: Updates state.
- `type="month"`: Provides a month picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest month.
- `max`: Specifies the latest month.
- `placeholder`: Provides a hint to the user.

# MonthInput.tsx

```typescript
import React, { useState } from 'react';

const MonthInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <label htmlFor="monthInput">Month Input:</label>
      <input
        type="month"
        id="monthInput"
        name="monthInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select month"
        min="2020-01"
        max="2099-12"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default MonthInput;
