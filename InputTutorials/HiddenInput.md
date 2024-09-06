# Hidden Input

**Mandatory Fields:**
- `id`: Associates label with input (for accessibility, although hidden inputs don't display).
- `name`: For form submission.
- `value`: Controls hidden input value.

**Nice-to-Have Fields:**
- `defaultValue`: Sets the initial value.

# HiddenInput.tsx

```typescript
import React, { useState } from 'react';

const HiddenInput: React.FC = () => {
  const [value, setValue] = useState<string>('hiddenValue');

  return (
    <div>
      <label htmlFor="hiddenInput" style={{ display: 'none' }}>Hidden Input:</label>
      <input
        type="hidden"
        id="hiddenInput"
        name="hiddenInput"
        value={value}
      />
    </div>
  );
};

export default HiddenInput;
