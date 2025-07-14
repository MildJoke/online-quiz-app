import React, { useState, useEffect } from 'react';
import './Result.css';

const Result = ({ quizType, userAnswers, onRestart }) => {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    loadQuestionsAndAnswers();
  }, [quizType]);

  const loadQuestionsAndAnswers = async () => {
    try {
      const [questionsResponse, answersResponse] = await Promise.all([
        import(`../data/${quizType}-quiz.json`),
        import(`../data/${quizType}-answers.json`)
      ]);
      setQuestions(questionsResponse.default);
      setCorrectAnswers(answersResponse.default.reduce((acc, item) => {
        acc[item.id] = item.correctAnswer;
        return acc;
      }, {}));
      calculateScore(questionsResponse.default, answersResponse.default);
      setLoading(false);
    } catch (error) {
      console.error('Error loading questions and answers:', error);
      setLoading(false);
    }
  };

  const calculateScore = (questions, answers) => {
    const correctAnswerCount = answers.reduce((count, item) => {
      if (userAnswers[item.id] === item.correctAnswer) {
        count++;
      }
      return count;
    }, 0);
    setScore(correctAnswerCount);
    
    // Check if user got perfect score on anime quiz to unlock advanced quiz
    if (quizType === 'anime' && correctAnswerCount === questions.length) {
      setUnlocked(true);
    }
  };

  if (loading) {
    return (
      <div className="result-loading">
        <div className="loading-spinner"></div>
        <p>Loading quiz results...</p>
      </div>
    );
  }

  return (
    <div className="result-container">
      <div className="result-header">
        <h2>Your Quiz Results</h2>
        <p>Let's see how you did!</p>
      </div>

      <div className="result-summary">
        <span className="score">
          You scored {score} out of {questions.length}!
        </span>
        <div className="score-indicator">
          <div className="score-fill" style={{ width: `${(score / questions.length) * 100}%` }}></div>
        </div>
        <div className="result-actions">
          <button className="restart-button" onClick={onRestart}>
            Try Again
          </button>
          {unlocked && (
            <div className="unlock-notification">
              <p className="unlock-message">🎉 Congratulations! You've unlocked the Advanced Anime Quiz!</p>
              <button 
                className="advanced-quiz-button" 
                onClick={() => window.location.reload()}
              >
                🔓 Access Anime Quiz 2.0
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="result-details">
        <h3>Question Breakdown:</h3>
        {questions.map((question, index) => (
          <div key={question.id} className="result-question">
            <h4 className="question-text">{question.question}</h4>
            <ul className="options-list">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} className={
                  option === correctAnswers[question.id] ? 'correct-answer' :
                  option === userAnswers[question.id] ? 'wrong-answer' : ''
                }>
                  <span className="option-letter">{String.fromCharCode(65 + optionIndex)}.</span> {option}
                </li>
              ))}
            </ul>
            <div className="user-answer">
              Your answer: <strong>{userAnswers[question.id] || 'No answer provided'}</strong>
            </div>
            <div className="correct-answer">
              Correct answer: <strong>{correctAnswers[question.id]}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;

