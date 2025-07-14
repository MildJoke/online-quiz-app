# 🎯 Online Quiz Application

A modern, interactive React-based quiz application featuring multiple quiz categories, progress tracking, and an advanced unlocking system.

## 🌟 Features

### 📚 Multiple Quiz Categories
- **⚡ Harry Potter Quiz** - Test your wizarding world knowledge
- **👟 Shoe Culture Quiz** - Explore sneaker brands and culture
- **🎌 Anime Quiz** - Challenge your anime knowledge
- **🎌 Anime Quiz 2.0** - Advanced anime quiz (unlockable)

### 🎮 Interactive Gameplay
- **Progress Tracking** - Visual progress bar and question indicators
- **Review System** - Review all answers before final submission
- **Instant Results** - Immediate scoring with detailed breakdown
- **Unlock System** - Perfect scores unlock advanced content

### 🎨 Modern UI/UX
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Hover effects and transitions
- **Glassmorphism Effects** - Modern translucent design
- **Color-coded Categories** - Visual distinction between quiz types

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MildJoke/online-quiz-app.git
   cd online-quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 How to Use

### Taking a Quiz
1. **Select a Quiz** - Choose from available quiz categories
2. **Answer Questions** - Navigate through questions using Previous/Next buttons
3. **Review Answers** - Check your responses before submitting
4. **View Results** - See your score and correct answers

### Unlocking Advanced Content
- Score **7/7** on the Anime Quiz to unlock **Anime Quiz 2.0**
- Advanced quiz features harder questions and deeper anime knowledge

## 🏗️ Project Structure

```
online-quiz-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── QuizSelection.js    # Quiz category selection
│   │   ├── Quiz.js             # Main quiz interface
│   │   ├── Review.js           # Answer review system
│   │   ├── Result.js           # Results display
│   │   └── *.css               # Component styles
│   ├── data/
│   │   ├── harry-potter-quiz.json
│   │   ├── shoe-culture-quiz.json
│   │   ├── anime-quiz.json
│   │   ├── anime-advanced-quiz.json
│   │   └── *-answers.json      # Answer keys
│   ├── App.js                  # Main application
│   ├── App.css                 # Global styles
│   └── index.js                # Entry point
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Harry Potter**: Dark Red (#8B0000) - Gryffindor vibes
- **Shoe Culture**: Blue (#4A90E2) - Modern and sleek
- **Anime**: Pink/Red (#FF6B6B) - Vibrant and energetic
- **Anime Advanced**: Dark Red (#8B0000) - Elite difficulty

### Animations
- **Hover Effects** - Cards lift and glow on hover
- **Progress Indicators** - Smooth progress bar animations
- **Button Transitions** - Smooth color and transform transitions
- **Loading States** - Spinner animations during data loading

## 🔧 Technical Details

### Technologies Used
- **React** - Frontend framework
- **CSS3** - Styling and animations
- **JSON** - Data storage for questions and answers
- **Local Storage** - Unlock state persistence

### Key Components
- **App.js** - Main application logic and state management
- **QuizSelection** - Quiz category selection interface
- **Quiz** - Question display and answer collection
- **Review** - Answer review before submission
- **Result** - Score display and unlock notifications

### Data Management
- Questions stored in JSON files for easy modification
- Separate answer key files for secure scoring
- Dynamic import system for quiz loading

## 📊 Quiz Statistics

| Quiz Type | Questions | Difficulty | Unlock Condition |
|-----------|-----------|------------|------------------|
| Harry Potter | 7 | Medium | Available |
| Shoe Culture | 7 | Easy | Available |
| Anime | 7 | Medium | Available |
| Anime Advanced | 7 | Hard | Perfect score on Anime Quiz |


**MildJoke** - [GitHub Profile](https://github.com/MildJoke)

Project Link: [https://github.com/MildJoke/online-quiz-app](https://github.com/MildJoke/online-quiz-app)

---

⭐ **Star this repository if you found it helpful!** ⭐
