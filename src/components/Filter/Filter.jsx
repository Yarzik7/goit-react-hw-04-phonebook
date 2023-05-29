import { useRef } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'
import { nanoid } from 'nanoid';

const Filter = ({ handleChangeFilter, filter }) => {
  const filterInputId = useRef(nanoid());

  return (
    <div className={css.filterBox}>
      <label htmlFor={filterInputId.current} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="tel"
        name="filter"
        id={filterInputId.current}
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
        onChange={handleChangeFilter}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
