import PropTypes from 'prop-types';
import css from './listItem.module.css';

const ContactListItem = ({ name, number, onDelete }) => (
  <li className={css.item}>
    <p className={css.text}>{name}: {number}</p>
    <button className={css.button} type="button" onClick={onDelete}>Delete</button>
  </li>
);

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};  

export default ContactListItem;