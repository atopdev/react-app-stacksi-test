import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import FTextField from 'components/Form/FTextField';
import FCheckbox from 'components/Form/FCheckbox';

const formSchema = Yup.object().shape({
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  email: Yup.string().email('Incorrect email format').required('Required'),
  phone_number: Yup.string()
    .phone('US', true, 'Incorrect phone number format')
    .required('Required'),
  terms_condition: Yup.mixed()
    .oneOf([true], 'Please accept terms and conditions')
    .required(),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));
    setDone(true);
  };

  return (
    <div className="page">
      <div className="overlay">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="card">
        <div className="card-left">
          <div className="text-2 mb-12">
            Here’s some amazing copy. Doesn’t this copy just make you excited?
          </div>
          <div className="text-3">
            Wow, you really built this form in 2-3 hours? You’re awesome.
          </div>
          <ul className="list mt-30">
            <li className="list-item list-item--active">
              <Avatar>
                <PlayArrowIcon />
              </Avatar>
              Write Code
            </li>
            <li className="list-item">
              <Avatar>2</Avatar>
              Fix Bugs
            </li>
            <li className="list-item">
              <Avatar>3</Avatar>
              Profit
            </li>
          </ul>
        </div>
        {done && <div className="card-right text-center text-1">Thank you</div>}
        {!done && (
          <div className="card-right">
            <div className="text-1 mb-30">Create an Account</div>
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                terms_condition: false,
              }}
              validationSchema={formSchema}
              onSubmit={handleSubmit}
              validateOnMount
            >
              {({ isValid, isSubmitting }) => {
                return (
                  <Form className="form">
                    <div className="form-content">
                      <Field
                        name="first_name"
                        component={FTextField}
                        label="First Name"
                      />
                      <Field
                        name="last_name"
                        component={FTextField}
                        label="Last Name"
                      />
                      <Field
                        name="email"
                        component={FTextField}
                        label="Email"
                        type="email"
                      />
                      <Field
                        name="phone_number"
                        component={FTextField}
                        label="Phone Number"
                      />
                      <Field
                        name="terms_condition"
                        component={FCheckbox}
                        label={
                          <>
                            I agree to write Excellent Code{' '}
                            <a
                              href="https://www.stacksi.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Terms and Conditions
                            </a>
                          </>
                        }
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!isValid || isSubmitting || loading}
                        className="mt-8"
                      >
                        Continue
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="mt-20 text-4">
              Already a member? <a href="/login">Sign in</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
