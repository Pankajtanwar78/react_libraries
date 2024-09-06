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
