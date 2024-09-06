# react_libraries
Different libraries will be explored here


### Time Input

```markdown
# Time Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected time.
- `onChange`: Updates state.
- `type="time"`: Provides a time picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the earliest time.
- `max`: Specifies the latest time.
- `placeholder`: Provides a hint to the user.

# TimeInput.tsx

```typescript
import React, { useState } from 'react';

const TimeInput: React.FC = () => {
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
      <label htmlFor="timeInput">Time Input:</label>
      <input
        type="time"
        id="timeInput"
        name="timeInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select time"
        min="00:00"
        max="23:59"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default TimeInput;




### Color Input

```markdown
# Color Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls selected color.
- `onChange`: Updates state.
- `type="color"`: Provides a color picker.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.

# ColorInput.tsx

```typescript
import React, { useState } from 'react';

const ColorInput: React.FC = () => {
  const [value, setValue] = useState<string>('#ff0000');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (!/^#[0-9a-fA-F]{6}$/.test(value)) {
      setError('Please enter a valid hex color.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="colorInput">Color Input:</label>
      <input
        type="color"
        id="colorInput"
        name="colorInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select color"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default ColorInput;




### Date Input

```markdown
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




### File Input

```markdown
# File Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `onChange`: Updates state when file is selected.
- `type="file"`: Allows file selection.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `accept`: Specifies acceptable file types.
- `multiple`: Allows selection of multiple files.

# FileInput.tsx

```typescript
import React, { useState } from 'react';

const FileInput: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    } else {
      setError('No file selected.');
    }
  };

  const handleBlur = () => {
    if (!file) {
      setError('This field is required.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">File Input:</label>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        onChange={handleChange}
        onBlur={handleBlur}
        accept=".jpg,.png,.pdf"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileInput;




### Hidden Input

```markdown
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





### Month Input

```markdown
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




### Number Input

```markdown
# Number Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls number input value.
- `onChange`: Updates state.
- `type="number"`: Provides a number input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the minimum value.
- `max`: Specifies the maximum value.
- `step`: Specifies the interval between values.
- `placeholder`: Provides a hint to the user.

# NumberInput.tsx

```typescript
import React, { useState } from 'react';

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleBlur = () => {
    if (value <= 0) {
      setError('Value must be greater than 0.');
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
        min="1"
        placeholder="Enter a number"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default NumberInput;





### Range Input

```markdown
# Range Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls range input value.
- `onChange`: Updates state.
- `type="range"`: Provides a range input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `min`: Specifies the minimum value.
- `max`: Specifies the maximum value.
- `step`: Specifies the interval between values.
- `defaultValue`: Sets the initial value.

# RangeInput.tsx

```typescript
import React, { useState } from 'react';

const RangeInput: React.FC = () => {
  const [value, setValue] = useState<number>(50);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
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
        min="0"
        max="100"
        step="1"
        defaultValue="50"
      />
      <div>Value: {value}</div>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default RangeInput;





### Telephone Input

```markdown
# Telephone Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls phone number input.
- `onChange`: Updates state.
- `type="tel"`: Provides a telephone input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.
- `pattern`: Specifies a regex pattern for validation.

# TelephoneInput.tsx

```typescript
import React, { useState } from 'react';

const TelephoneInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
    if (!phoneRegex.test(value)) {
      setError('Please enter a valid phone number.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <label htmlFor="telephoneInput">Telephone Input:</label>
      <input
        type="tel"
        id="telephoneInput"
        name="telephoneInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter phone number"
        pattern="[0-9]{10}"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default TelephoneInput;





### URL Input

```markdown
# URL Input

**Mandatory Fields:**
- `id`: Associates label with input.
- `name`: For form submission.
- `value`: Controls URL input.
- `onChange`: Updates state.
- `type="url"`: Provides a URL input field.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.

# URLInput.tsx

```typescript
import React, { useState } from 'react';

const URLInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    try {
      new URL(value);
      setError(null);
    } catch {
      setError('Please enter a valid URL.');
    }
  };

  return (
    <div>
      <label htmlFor="urlInput">URL Input:</label>
      <input
        type="url"
        id="urlInput"
        name="urlInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter URL"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default URLInput;





### Week Input

```markdown
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





### Textarea Input

```markdown
# Textarea Input

**Mandatory Fields:**
- `id`: Associates label with textarea.
- `name`: For form submission.
- `value`: Controls textarea value.
- `onChange`: Updates state.
- `rows`: Specifies the number of visible text lines.
- `onBlur`: Handles focus loss event.

**Nice-to-Have Fields:**
- `placeholder`: Provides a hint to the user.
- `cols`: Specifies the visible width of the textarea.
- `maxLength`: Limits the number of characters.

# TextareaInput.tsx

```typescript
import React, { useState } from 'react';

const TextareaInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <label htmlFor="textareaInput">Textarea Input:</label>
      <textarea
        id="textareaInput"
        name="textareaInput"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        rows={4}
        placeholder="Enter text"
        maxLength={500}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default TextareaInput;

