import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={styles.feedbackOptions}>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className={styles.button}>
          {option}
        </button>
      ))}
    </div>
  );
  
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  export default FeedbackOptions;