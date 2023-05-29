import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = useRef(nanoid());
  const numberInputId = useRef(nanoid());

   const handleFormSubmit = event => {
      event.preventDefault();
      handleSubmit({name, number});
      reset();
    };

  const handleChange = ({ target: { nameOfInput, value } }) => {
    switch (nameOfInput) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label htmlFor={nameInputId.current} className={css.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        id={nameInputId.current}
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
        onChange={handleChange}
        value={name}
      />

      <label htmlFor={numberInputId.current} className={css.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id={numberInputId.current}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.input}
        onChange={handleChange}
        value={number}
      />

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

// class ContactForm extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleSubmit = event => {
//     event.preventDefault();
//     const { handleSubmit } = this.props;
//     handleSubmit(this.state);
//     this.reset();
//   };

//   handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId} className={css.label}>
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           id={this.nameInputId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           className={css.input}
//           onChange={this.handleChange}
//           value={name}
//         />

//         <label htmlFor={this.numberInputId} className={css.label}>
//           Number
//         </label>
//         <input
//           type="tel"
//           name="number"
//           id={this.numberInputId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           className={css.input}
//           onChange={this.handleChange}
//           value={number}
//         />

//         <button type="submit" className={css.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
