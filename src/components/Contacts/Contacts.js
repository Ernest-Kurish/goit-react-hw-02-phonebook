import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css['contacts__list']}>
      {contacts.map(({ id, name, number }) => {
        const handleDelete = () => {
          onDelete(id);
        };

        return (
          <li key={id} className={css['contacts__item']}>
            {name}: {number}
            <button
              type="button"
              className={css['contacts__btn']}
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;