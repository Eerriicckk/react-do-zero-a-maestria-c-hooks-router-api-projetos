import './App.css';

import { useCallback, useEffect, useState } from "react"

import { wordsList } from "./data/words"

import StartScreen from './components/StartScreen';
import { EndScreen } from './components/EndScreen';
import { GameScreen } from './components/GameScreen';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetter] = useState([])

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return [word, category]
  }, [words])

  const startGame = useCallback(() => {
    const [word, category] = pickWordAndCategory();
    setPickedWord(word);
    setPickedCategory(category);
    setLetter(word.toLowerCase().split(""))
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {
    const letterOk = letter.toLowerCase()

    if (guessedLetters.includes(letterOk) || wrongLetters.includes(letterOk)) return
    if (letters.includes(letterOk)) {
      setGuessedLetters((actual) => [
        ...actual,
        letterOk
      ])
    } else {
      setWrongLetters((actual) => [
        ...actual,
        letterOk
      ])
      setGuesses(guesses - 1)
    }
  }

  const backStart = () => {
    retry()
    setGameStage(stages[0].name)
  }

  const clearStates = () => {
    setGuesses(3);
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  const retry = () => {
    setScore(0);
  }

  useEffect(() => {
    if (guesses <= 0) {
      clearStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    if (guessedLetters.length <= 0) return
    const uniqueLetters = [...new Set(letters)]
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actual) => actual + (guessedLetters.length * 15));
      clearStates()
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" &&
        <GameScreen
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      }
      {gameStage === "end" && <EndScreen backStart={backStart} score={score} />}
    </div>
  );
}

export default App;
