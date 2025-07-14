import React, { useState } from 'react';
import './App.css';
import QuizSelection from './components/QuizSelection';
import Quiz from './components/Quiz';
import Review from './components/Review';
import Result from './components/Result';

function App() {
  const [currentStep, setCurrentStep] = useState('selection'); // selection, quiz, review, result
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizTitle, setQuizTitle] = useState('');

  const handleQuizSelection = (quizType, title) => {
    setSelectedQuiz(quizType);
    setQuizTitle(title);
    setCurrentStep('quiz');
    setUserAnswers({});
  };

  const handleQuizComplete = (answers) => {
    setUserAnswers(answers);
    setCurrentStep('review');
  };

  const handleReviewComplete = () => {
    setCurrentStep('result');
  };

  const handleRestartQuiz = () => {
    setCurrentStep('selection');
    setSelectedQuiz(null);
    setUserAnswers({});
    setQuizTitle('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 Online Quiz Application</h1>
        {currentStep !== 'selection' && (
          <div className="quiz-info">
            <h2>{quizTitle}</h2>
            <div className="progress-indicator">
              <span className={currentStep === 'quiz' ? 'active' : currentStep === 'selection' ? '' : 'completed'}>
                Quiz
              </span>
              <span className={currentStep === 'review' ? 'active' : currentStep === 'result' ? 'completed' : ''}>
                Review
              </span>
              <span className={currentStep === 'result' ? 'active' : ''}>
                Result
              </span>
            </div>
          </div>
        )}
      </header>

      <main className="App-main">
        {currentStep === 'selection' && (
          <QuizSelection onQuizSelect={handleQuizSelection} />
        )}
        
        {currentStep === 'quiz' && (
          <Quiz 
            quizType={selectedQuiz}
            onComplete={handleQuizComplete}
          />
        )}
        
        {currentStep === 'review' && (
          <Review 
            quizType={selectedQuiz}
            userAnswers={userAnswers}
            onComplete={handleReviewComplete}
            onBack={() => setCurrentStep('quiz')}
          />
        )}
        
        {currentStep === 'result' && (
          <Result 
            quizType={selectedQuiz}
            userAnswers={userAnswers}
            onRestart={handleRestartQuiz}
          />
        )}
      </main>
    </div>
  );
}

export default App;
