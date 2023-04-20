import PropTypes from 'prop-types';
import css from './form.module.css';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state);
    this.setState({name: '', number: ''})
  }

  render() {
    const { name, number } = this.state;

   return (
     <form onSubmit={onSubmit} className={css.form}>
       <label className={css.label}>
         Name:
         <input
           type="text"
           value={name}
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           onChange={this.handleChange}
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
           onChange={this.handleChange}
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
 }
  
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;