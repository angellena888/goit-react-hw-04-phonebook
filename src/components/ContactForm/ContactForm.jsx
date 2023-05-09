import PropTypes from 'prop-types';
import css from './form.module.css';
import { useState } from 'react';

export function ContactForm({ onSubmit }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
    setName(target.value);
    } else if (target.name === 'number') {
    setNumber(target.value);
}
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

   return (
     <form onSubmit={handleSubmit} className={css.form}>
       <label className={css.label}>
         Name:
         <input
           type="text"
           value={name}
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           onChange={handleChange}
           className={css.input_text}
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
         />
       </label>
       <label className={css.label}>
         Phone number:
         <input
           type="tel"
           name="number"
           value={number}
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           onChange={handleChange}
           className={css.input_tel}
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
         />
       </label>
       <button type="submit" className={css.button}>
         Add contact
       </button>
     </form>
   );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;