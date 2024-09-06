# Search Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls input value.
- `onChange`: Updates state.
- `type="search"`: Provides a search input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user about the expected value.
- `required`: Marks the field as mandatory.

# SearchInput.tsx

```typescript
import React, { useState } from 'react';

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (value.trim() === '') {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="searchInput">Search Input:</label>
      <input
        type="search"
        id="searchInput"
        name="searchInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Search..."
        required
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default SearchInput;
