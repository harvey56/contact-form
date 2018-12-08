import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './stylesheet.css';
import { withStyles, WithStyles } from '@material-ui/core';
import { StyledComponentProps } from '@material-ui/core';
import { Formik, Field, Form, FormikProps, FieldProps } from 'formik';
import {TextField} from '@material-ui/core';
import { Debug } from './Debug';
import styles, { ClassKeys } from './styles';
import options from './options';

interface MyFormValues {
  firstname: string,
  lastname: string,
  email: string,
}

interface OwnProps {
}

type Props = OwnProps & StyledComponentProps;

const App: React.SFC<{}> = (props: Props) => (
      <div>
      <h1>A simple contact form, typed, using formik, and material-ui</h1>
      <Formik
      initialValues={{firstname: '', lastname: '', email: ''}}
      onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 1000);
      }}
      render={(formikBag: FormikProps<MyFormValues>): JSX.Element => {
          const { values } = formikBag;

          return (
              <Form>
                <Field
                  name="contact form"
                  render={({ field, form }: FieldProps<MyFormValues>) => (
                    <div>
                      <TextField  {...field} placeholder="Firstname" />
                      {form.touched.firstname &&
                        form.errors.firstname &&
                        form.errors.firstname}
                      <TextField  {...field} placeholder="Lastname" />
                      {form.touched.lastname &&
                        form.errors.lastname &&
                        form.errors.lastname}
                      <TextField  {...field} placeholder="email" />
                      {form.touched.email &&
                        form.errors.email &&
                        form.errors.email}
                    </div>
                  )}
                />
                  
                <Debug />
              </Form> 
          )
      }}
      />
      </div>
    );


export default withStyles(styles)(App);