import React from 'react';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDelete }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <ul className={css['contacts__list']}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css['contacts__item']}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css['contacts__btn']}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
