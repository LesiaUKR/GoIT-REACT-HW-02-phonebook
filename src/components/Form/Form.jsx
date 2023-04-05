import React, { Component } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'the name is too short')
    .max(100, 'the name is too long')
    .required('the name is required'),
  number: Yup.string()
    .min(3, 'the number is too short')
    .max(50, 'the number is too long')
    .required('the number is required'),
});

export class Form extends Component {
  // state = {
  //     name: '',
  //     number: '',
  //     id: '',
  // };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget)
    // console.log(event.currentTarget.name)
    // console.log(event.currentTarget.value)
    // this.setState({ name: event.currentTarget.value });
    // console.log(    this.setState({ name: event.currentTarget.value }))
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik
        initialValues={{ initialValues }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
