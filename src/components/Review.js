import React, { useState, useEffect } from 'react';
import './Review.css';

const Review = ({ quizType, userAnswers, onComplete, onBack }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, [quizType]);

  const loadQuestions = async () => {
    try {
      const response = await import(`../data/${quizType}-quiz.json`);
      setQuestions(response.default);
      setLoading(false);
    } catch (error) {
      console.error('Error loading questions:', error);
      setLoading(false);
    }
  };

  const getAnsweredQuestionsCount = () => {
    return Object.keys(userAnswers).length;
  };

  const isAllQuestionsAnswered = () => {
    return getAnsweredQuestionsCount() === questions.length;
  };

  if (loading) {
    return (
      <div className="review-loading">
        <div className="loading-spinner"></div>
        <p>Loading review...</p>
      </div>
    );
  }

  return (
    <div className="review-container">
      <div className="review-header">
        <h2>Review Your Answers</h2>
        <p>
          Please review your answers before submitting. You can go back to make changes if needed.
        </p>
        <div className="review-summary">
          <span className="answered-count">
            {getAnsweredQuestionsCount()} of {questions.length} questions answered
          </span>
          {!isAllQuestionsAnswered() && (
            <span className="warning">⚠️ Some questions are not answered</span>
          )}
        </div>
      </div>

      <div className="review-questions">
        {questions.map((question, index) => (
          <div key={question.id} className="review-question">
            <div className="question-header">
              <span className="question-number">Question {index + 1}</span>
              <span className={`answer-status ${userAnswers[question.id] ? 'answered' : 'unanswered'}`}>
                {userAnswers[question.id] ? '✓ Answered' : '○ Not Answered'}
              </span>
            </div>
            
            <h3 className="question-text">{question.question}</h3>
            
            <div className="options-review">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`option-review ${
                    userAnswers[question.id] === option ? 'selected' : ''
                  }`}
                >
                  <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                  <span className="option-text">{option}</span>
                  {userAnswers[question.id] === option && (
                    <span className="selected-indicator">✓</span>
                  )}
                </div>
              ))}
            </div>
            
            {!userAnswers[question.id] && (
              <div className="no-answer-message">
                <em>No answer selected</em>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="review-actions">
        <button className="back-button" onClick={onBack}>
          ← Back to Quiz
        </button>
        
        <div className="submit-section">
          {!isAllQuestionsAnswered() && (
            <p className="submit-warning">
              You have unanswered questions. You can still submit, but they will be marked as incorrect.
            </p>
          )}
          <button 
            className="submit-button"
            onClick={onComplete}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
