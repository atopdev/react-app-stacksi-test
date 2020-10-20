import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ field, form, ...props }) => {
  console.log(field, form, props);

  return (
    <TextField
      {...field}
      {...props}
      error={Boolean(form.errors.firstName && form.touched.firstName)}
      helperText={
        form.errors.firstName &&
        form.touched.firstName &&
        String(form.errors.firstName)
      }
    />
  );
};

export default TextInput;
