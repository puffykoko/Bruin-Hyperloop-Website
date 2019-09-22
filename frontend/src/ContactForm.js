import React from 'react';
import './ContactForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';


function Input(props){
  return(
    <div className="Input-Contact">
      <label > {props.label} </label>
      <Field className="Input-Text-Contact" type="text" name={props.name}/>
    </div>
  );
}

function Textbox(props){
  return(
    <div className="Textbox-Contact">
      <label> {props.label} </label>
      <Field className="Textbox-Text-Contact" type="text" component="textarea" name={props.name} />
    </div>
  );
}

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    }

    this.foo = this.props.handleSubmit.bind(this);
  }

  validate(values){
    let errors = {};

    if (!values.email){
      errors.email = "Required";
      errors["form"] = "Please make sure you have filled out all fields.";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
      errors["form"] = "Please enter a valid email address.";
    }

    for (var value in values){

        if(!values[value]){
            errors[value] = "Required";
            errors["form"] = "Please fill out all fields.";
        }
    }
    return errors;
  }

  handleSubmit(values, setSubmitting){
    this.setState({submitted: true});
    this.foo();
    setSubmitting(false);
    setTimeout(() => {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        console.log(xhr.responseText)
      })

      const email_info = {
        email: values.email ,
        subject: "Member Application: " + values.subject,
        message: values.message};
      xhr.open('POST', 'http://127.0.0.1:8000/email/')
      xhr.send(JSON.stringify(email_info))
    }, 400);
  }


  render(){
    return(

        <div className="ContactForm">
          <Formik
            initialValues={{email: '', subject: '', message: '', form: 'incomplete'}}
            validate={(values) => this.validate(values)}
            onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
            validateOnChange={true}
            valiatedOnBlur={true}
          >
            {({ isSubmitting, validateForm, validateField, errors }) => (

              <Form>
                  <Input label="Email" name = "email"/>
                  <Input label="Subject" name = "subject"/>
                  <Textbox label="Message" name="message"/>
                  <ErrorMessage className="Error-Message-Contact" name="form" component="div" />
                  <button className="Send-Button-Contact" type="submit" disabled={isSubmitting}> Send </button>
              </Form>

            )}
          </Formik>
        </div>

    );
  }
}

export default ContactForm;
