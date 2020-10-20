import React from 'react';
import TextField from '@material-ui/core/TextField';

const FTextInput = ({ field, form, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      error={Boolean(form.errors[field.name] && form.touched[field.name])}
      helperText={
        form.errors[field.name] &&
        form.touched[field.name] &&
        String(form.errors[field.name])
      }
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      fullWidth
      size="small"
    />
  );
};

export default FTextInput;
