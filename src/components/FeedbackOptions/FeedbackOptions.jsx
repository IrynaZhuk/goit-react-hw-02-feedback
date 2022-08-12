import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={styles.list}>
        {options.map(option => {
          return (
            <li className={styles.option} key={option}>
              <button
                type="button"
                value={option}
                name={option}
                onClick={() => {
                  onLeaveFeedback(option);
                }}
                className={styles.btn}
              >
                {option.toUpperCase()}
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
