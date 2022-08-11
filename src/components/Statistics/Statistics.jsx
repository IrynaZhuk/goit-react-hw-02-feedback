import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.item}>
        Good:
        <span className={styles.good}>{good}</span>
      </p>
      <p className={styles.item}>
        Neutral:
        <span className={styles.neutral}>{neutral}</span>
      </p>
      <p className={styles.item}>
        Bad:
        <span className={styles.bad}>{bad}</span>
      </p>
      <p className={styles.item}>
        Total:
        <span>{total}</span>
      </p>
      <p className={styles.item}>
        Positive:
        <span>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
