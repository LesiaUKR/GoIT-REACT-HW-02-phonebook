import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { HiUserAdd } from 'react-icons/hi';
import {
  Form,
  FormLabel,
  Field,
  AddButton,
  ErrorMessage,
} from 'components/ContactsForm/ContactsForm.styled.js';

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

export const ContactsForm = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      onSubmit({ ...values, id: nanoid() });
      actions.resetForm();
    }}
  >
    <Form>
      <FormLabel htmlFor="name">
        Name
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />
      </FormLabel>
      <FormLabel htmlFor="number">
        Phone number
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, pa-rentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="span" />
      </FormLabel>
      <AddButton type="submit">
        <HiUserAdd />
        Add contact
      </AddButton>
    </Form>
  </Formik>
);

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
