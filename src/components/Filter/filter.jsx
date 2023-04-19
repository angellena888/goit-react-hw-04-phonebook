import PropTypes from 'prop-types';
import css from './filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <label className={css.label}>
    Find contacts by name
    <input type="text" value={value} onChange={onChangeFilter} className={css.input} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;