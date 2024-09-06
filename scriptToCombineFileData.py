import os

def combine_markdown_files(input_dir, output_file, file_sequence):
    with open(output_file, 'w') as outfile:
        for file_name in file_sequence:
            file_path = os.path.join(input_dir, file_name)
            if os.path.exists(file_path):
                with open(file_path, 'r') as infile:
                    # Write the content of each file
                    outfile.write(infile.read())
                    # Append code block delimiter
                    outfile.write('```\n')
                    # Add four blank lines
                    outfile.write('\n' * 4)
            else:
                print(f"File {file_name} not found in {input_dir}")

if __name__ == "__main__":
    input_directory = 'FormikInputTutorials'
    output_file = 'Formik.md'
    file_sequence = [
        'Formik_Field.md', 'Formik_TextInput.md', 'Formik_EmailInput.md', 
        'Formik_PasswordInput.md', 'Formik_NumberInput.md', 'Formik_CheckboxInput.md',
        'Formik_RadioInput.md', 'Formik_SelectInput.md', 'Formik_TextAreaInput.md', 
        'Formik_DateInput.md', 'Formik_RangeInput.md', 'Formik_SearchInput.md', 
        'Formik_TimeInput.md', 'Formik_ColorInput.md', 'Formik_FileInput.md', 
        'Formik_MonthInput.md', 'Formik_WeekInput.md', 'Formik_TelephoneInput.md', 
        'Formik_UrlInput.md', 'Formik_HiddenInput.md'
    ]
    
    combine_markdown_files(input_directory, output_file, file_sequence)
    print(f'Combined markdown files into {output_file}')
