import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import css from './ContactItem.module.css';

const ContactItem = ({ name, number, handleDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.caption}>Name: {name}</p>
        <p className={css.caption}>Number: {number}</p>
      </div>

      <button type="button" className={css.button} onClick={handleDeleteContact} data-name={name}>
        <FaTrash />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
