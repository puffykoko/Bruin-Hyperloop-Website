import React from 'react';
import './Apply.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const question1 = "Why do you want to join Hyperloop? "
const question2 = "What experience do you have working on technical, creative, or team projects?"
const question3 = "Is there anything else you would like us to know?"


function Input(props){
  return(
    <div className="Input-Apply">
      <label > {props.label} </label>
      <Field className="Input-Text-Apply" type="text" name={props.name}/>
      <ErrorMessage className="error" name={props.name} component="div" />
    </div>
  );
}

function Question(props){
  return(
    <div className="Question">
      <p> {props.question} </p>
      <Field className="Response" type="text" component="textarea" name={props.name} />
      <ErrorMessage className="error" name={props.name} component="div" />
    </div>
  );
}

class ApplicationForm extends React.Component {

  constructor() {
    super();
    this.state = {
      submitted: false,
    }
  }

  validate(values){
    let errors = {};

    if(!values.email){
        errors.email = 'Invalid email address';
        errors["form"] = "Please make sure you have filled out all required fields.";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
      errors["form"] = "Please make sure you have entered a valid email address.";
    }

    for (var value in values){
        if(!values[value]){
            errors[value] = "Required";
            errors["form"] = "Please make sure you have filled out all required fields.";
        }
    }
    return errors;
  }

  handleSubmit(values, setSubmitting){
    this.setState({submitted: true});
    setSubmitting(false);
    setTimeout(() => {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        console.log(xhr.responseText)
      })
      var applicant =  values.firstname + " " + values.lastname
      var responses = question1 + "\n\n" + values.response1 + "\n\n" +
                      question2 + "\n\n" + values.response2 + "\n\n" +
                      question3 + "\n\n" + values.response3 + "\n\n"
      var message = "Applicant: " + applicant + "\n\n" +
                    "Reponses: \n\n" + responses
      const email_info = {
        email: values.email ,
        subject: "Member Application: " + applicant ,
        message: message};
      xhr.open('POST', 'http://127.0.0.1:8000/email/')
      xhr.send(JSON.stringify(email_info))
    }, 400);
  }


  render(){
    return(
      <div>
          <Formik
            initialValues={{firstname: '', lastname: '', email: '',
                            response1: '', response2: '', response3: '', form: 'incomplete'}}
            validate={(values) => this.validate(values)}
            onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
          >
            {({ isSubmitting, validateForm, validateField, errors }) => (

              <Form className="ApplicationForm">
                {this.state.submitted &&
                  <div className="Success-Message-Apply">
                    <p className="Main-Text">
                      Thank You.
                    </p>
                    <p className="Sub-Text">
                      A copy of your responses has been sent to your email.
                    </p>
                  </div>
                  }
                {!this.state.submitted &&
                <div>
                  <p className="Main-Text">
                    We'd love to have you. Apply below.
                  </p>

                  <Input label="First Name" name = "firstname"/>
                  <Input label="Last Name" name = "lastname"/>
                  <Input label="Email" name = "email"/>
                  <Question question={question1} name="response1"/>
                  <Question question={question2} name="response2"/>
                  <Question question={question3} name="response3"/>
                  <ErrorMessage className="error Incomplete" name="form" component="div" />

                  <button className="Submit-Button" type="submit" disabled={isSubmitting}> Submit </button>
                </div>
              }
              </Form>

            )}
          </Formik>
        </div>
    );
  }
}


class Apply extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Apply">
        <ApplicationForm/>
      </div>
    );
  }
}


export default Apply;
