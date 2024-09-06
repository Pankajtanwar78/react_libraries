# Date Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected date.
- `onChange`: Updates state.
- `type="date"`: Provides a date picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest date.
- `max`: Specifies the latest date.
- `placeholder`: Provides a hint to the user.

# DateInput.tsx

```typescript
import React, { useState } from 'react';

const DateInput: React.FC = () => {
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
      <label htmlFor="dateInput">Date Input:</label>
      <input
        type="date"
        id="dateInput"
        name="dateInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select date"
        min="2000-01-01"
        max="2099-12-31"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default DateInput;
