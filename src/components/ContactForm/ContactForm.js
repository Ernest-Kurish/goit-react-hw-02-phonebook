import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !number) {
      alert('Please enter a name and number');
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    addContact(contact);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>

      <button type="submit" className={css['form__btn']}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;


