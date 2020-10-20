import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const FCheckbox = ({ field, form, label }) => {
  return (
    <FormControl
      error={Boolean(form.errors[field.name] && form.touched[field.name])}
      className="MuiCheckboxField-root"
    >
      <FormControlLabel
        control={<Checkbox {...field} />}
        label={label || field.name}
      />
      {form.errors[field.name] && form.touched[field.name] && (
        <FormHelperText>{String(form.errors[field.name])}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FCheckbox;
