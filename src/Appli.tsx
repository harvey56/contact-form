import React from 'react';
import './stylesheet.css';
import { withStyles, WithStyles, Button } from '@material-ui/core';
import { Formik, Field, Form, FormikProps, FieldProps } from 'formik';
import { TextField } from '@material-ui/core';
import { Debug } from './Debug';
import styles from './styles';
import * as Yup from 'yup';
interface MyFormValues {
  firstname: string,
  lastname: string,
  email: string,
  subject: string,
  message: string
}

interface OwnProps extends WithStyles<typeof styles>{}

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
  subject: Yup.string()
    .required('Required'),    
});

const App: React.SFC<OwnProps> = (props) => {

      const { classes } = props;

      return (
        <div className={classes.root}>
        <h1>A simple contact form, typed, using formik, and material-ui</h1>
        <Formik
        initialValues={{firstname: '', lastname: '', email: '', subject: '', message: ''}}
        onSubmit={(values) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 1000);
        }}
        validationSchema={formValidation}
        render={(formikBag: FormikProps<MyFormValues>): React.ReactNode => {

            return (
                <Form className={classes.form}>
                    <Field
                      name="firstname"
                      render={({ field, form }: FieldProps<MyFormValues>) => (
                        <div>
                          <TextField 
                            {...field} 
                            placeholder="Firstname" 
                            label="Firstname" 
                            fullWidth 
                            margin="normal"
                          />
                          {form.touched.firstname && form.errors.firstname}
                        </div>
                      )}
                    />
                    <Field
                      name="lastname"
                      render={({ field, form }: FieldProps<MyFormValues>) => (
                        <div>
                          <TextField  
                            {...field} 
                            placeholder="Lastname" 
                            label="Lastname" 
                            fullWidth 
                            margin="normal"
                          />
                          {form.touched.lastname && form.errors.lastname}
                        </div>
                      )}
                    />
                    <Field
                      name="email"
                      render={({ field, form }: FieldProps<MyFormValues>) => (
                        <div>
                          <TextField  
                            {...field} 
                            placeholder="Email" 
                            label="Email" 
                            fullWidth 
                            margin="normal"
                          />
                          {form.touched.email && form.errors.email}
                        </div>
                      )}
                    />
                    <Field
                      name="subject"
                      render={({ field, form }: FieldProps<MyFormValues>) => (
                        <div>
                          <TextField  
                            {...field} 
                            placeholder="Subject" 
                            label="Subject" 
                            fullWidth 
                            margin="normal"
                          />
                          {form.touched.subject && form.errors.subject}
                        </div>
                      )}
                    />
                    <Field
                      name="message"
                      render={({ field, form }: FieldProps<MyFormValues>) => (
                        <div>
                          <TextField  
                            {...field} 
                            placeholder="Message" 
                            label="Message" 
                            fullWidth 
                            margin="normal"
                            multiline={true}
                            rows={5}
                          />
                          {form.touched.subject && form.errors.subject}
                        </div>
                      )}
                    />
                    <Button variant="contained" type="submit" color="primary">
                      Send
                    </Button>
                    <Debug />
                </Form> 
            )
        }}
        />
        </div>
      );
    };


export default withStyles(styles)(App);