import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './stylesheet.css';
import { withStyles, WithStyles } from '@material-ui/core';
import { StyledComponentProps } from '@material-ui/core';
import { Formik, Field, Form, FormikProps, FieldProps } from 'formik';
import TextField from '@material-ui/core/TextField';
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

class App extends React.Component<Props, {}> {

  render() {

    const { classes } = this.props;

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <div>
      <h1>A simple contact form, typed, using formik, and material-ui</h1>
      <Formik
      initialValues={{firstname: '', lastname: '', email: '', initialValues: ''}}
      onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 1000);
      }}
      render={(formikBag: FormikProps<MyFormValues>): ReactElement<any> => {
          const { values } = formikBag;

          return (
              <Form>
                <Field
                  name="firstName"
                  render={({ field, form }: FieldProps<MyFormValues>) => (
                    <div>
                      <input type="text" {...field} placeholder="First Name" />
                      {form.touched.firstname &&
                        form.errors.firstname &&
                        form.errors.firstname}
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
  }
}

export default withStyles(styles)(App);