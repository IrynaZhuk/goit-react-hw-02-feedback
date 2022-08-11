import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={styles.list}>
        {options.map(item => {
          return (
            <li className={styles.item} key={item}>
              <button
                type="button"
                value={item}
                onClick={onLeaveFeedback}
                className={styles.btn}
              >
                {item.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
