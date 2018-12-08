import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './stylesheet.css';
import { withStyles, WithStyles, Button, Icon } from '@material-ui/core';
import { StyledComponentProps } from '@material-ui/core';
import { Formik, Field, Form, FormikProps, FieldProps } from 'formik';
import {TextField} from '@material-ui/core';
import { Debug } from './Debug';
import styles, { ClassKeys } from './styles';
import * as Yup from 'yup';
interface MyFormValues {
  firstname: string,
  lastname: string,
  email: string,
}

interface OwnProps {
}

type Props = OwnProps & StyledComponentProps;

const formValidation = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  lastname: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const App: React.SFC<{}> = (props: Props) => (
      <div className={props.classes!.root}>
      <h1>A simple contact form, typed, using formik, and material-ui</h1>
      <Formik
      initialValues={{firstname: '', lastname: '', email: ''}}
      onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 1000);
      }}
      validationSchema={formValidation}
      render={(formikBag: FormikProps<MyFormValues>): JSX.Element => {
          const { values } = formikBag;

          return (
              <Form className={props.classes!.form}>
                <Field
                  name="firstname"
                  render={({ field, form }: FieldProps<MyFormValues>) => (
                    <div>
                      <TextField  {...field} placeholder="Firstname" label="Firstname" fullWidth/>
                      {form.touched.firstname && form.errors.firstname}
                    </div>
                  )}
                />
                <Field
                  name="lastname"
                  render={({ field, form }: FieldProps<MyFormValues>) => (
                    <div>
                      <TextField  {...field} placeholder="Lastname" label="Lastname" fullWidth/>
                      {form.touched.lastname && form.errors.lastname}
                    </div>
                  )}
                />
                <Field
                  name="email"
                  render={({ field, form }: FieldProps<MyFormValues>) => (
                    <div>
                      <TextField  {...field} placeholder="Email" label="Email" fullWidth/>
                      {form.touched.email && form.errors.email}
                    </div>
                  )}
                />
                <Button variant="contained" type="submit" color="primary" className={props.classes!.button}>
                  Send
                </Button>
                <Debug />
              </Form> 
          )
      }}
      />
      </div>
    );


export default withStyles(styles)(App);