# Week Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected week.
- `onChange`: Updates state.
- `type="week"`: Provides a week picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest week.
- `max`: Specifies the latest week.
- `placeholder`: Provides a hint to the user.

# WeekInput.tsx

```typescript
import React, { useState } from 'react';

const WeekInput: React.FC = () => {
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
      <label htmlFor="weekInput">Week Input:</label>
      <input
        type="week"
        id="weekInput"
        name="weekInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select week"
        min="2020-W01"
        max="2099-W52"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default WeekInput;
