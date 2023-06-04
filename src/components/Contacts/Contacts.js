import React, { Component } from 'react';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { onDelete } = this.props;
    onDelete(id);
  }

  render() {
    const { contacts } = this.props;

    return (
      <ul className={css['contacts__list']}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css['contacts__item']}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css['contacts__btn']}
              onClick={() => this.handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
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
