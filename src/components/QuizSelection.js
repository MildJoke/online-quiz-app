import React from 'react';
import './QuizSelection.css';

const QuizSelection = ({ onQuizSelect }) => {
  const quizzes = [
    {
      id: 'harry-potter',
      title: '⚡ Harry Potter Quiz',
      description: 'Test your knowledge of the wizarding world! Questions about Hogwarts, characters, spells, and magical adventures.',
      difficulty: 'Medium',
      questions: 7,
      color: '#8B0000'
    },
    {
      id: 'shoe-culture',
      title: '👟 Shoe Culture Quiz',
      description: 'How much do you know about sneakers and shoe culture? From brands to history and design.',
      difficulty: 'Easy',
      questions: 7,
      color: '#4A90E2'
    },
    {
      id: 'anime',
      title: '🎌 Anime Quiz',
      description: 'Challenge your anime knowledge! Questions about popular series, characters, and storylines.',
      difficulty: 'Medium',
      questions: 7,
      color: '#FF6B6B'
    },
    {
      id: 'anime-advanced',
      title: '🎌 Anime Quiz 2.0',
      description: 'For true anime masters! Advanced questions about complex storylines, character details, and deep lore.',
      difficulty: 'Hard',
      questions: 7,
      color: '#8B0000',
      locked: !localStorage.getItem('animeQuizUnlocked')
    }
  ];

  return (
    <div className="quiz-selection">
      <div className="selection-header">
        <h2>Choose Your Quiz</h2>
        <p>Select a quiz topic to test your knowledge!</p>
      </div>
      
      <div className="quiz-grid">
        {quizzes.map((quiz) => (
          <div 
            key={quiz.id} 
            className="quiz-card"
            style={{ borderColor: quiz.color }}
            onClick={() => onQuizSelect(quiz.id, quiz.title)}
          >
            <div className="quiz-card-header" style={{ backgroundColor: quiz.color }}>
              <h3>{quiz.title}</h3>
            </div>
            <div className="quiz-card-content">
              <p>{quiz.description}</p>
              <div className="quiz-details">
                <span className="difficulty">
                  <strong>Difficulty:</strong> {quiz.difficulty}
                </span>
                <span className="question-count">
                  <strong>Questions:</strong> {quiz.questions}
                </span>
              </div>
            </div>
            <div className="quiz-card-footer">
              <button className="start-quiz-btn">Start Quiz</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSelection;
