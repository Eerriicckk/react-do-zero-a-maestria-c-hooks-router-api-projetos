import { useRef, useState } from "react";
import "./Game.css"

export const GameScreen = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
	const [letter, setLetter] = useState("");
	const letterInpuRef = useRef(null);

	const handleSendLetter = (e) => {
		e.preventDefault()
		verifyLetter(letter);
		setLetter("");
		letterInpuRef.current.focus()
	}

	return (
		<div className="game">
			<p className="points">
				<span>Pontuação: {score}</span>
			</p>
			<p className="tip">
				Dica: <span>{pickedCategory}</span>
			</p>
			<p className="guesses">
				<span>Dicas restantes:{guesses}</span>
			</p>
			<div className="wordContainer">
				{letters.map((letter, i) => (
					guessedLetters.includes(letter) ?
						(
							<span key={i} className="letter">{letter}</span>
						)
						: (
							<span key={i} className="blankSquare"></span>
						)
				))}
			</div>
			<div className="letterContainer">
				<form onSubmit={handleSendLetter}>
					Adivinhe uma letra:
					<input type="text" maxLength={1} required value={letter} onChange={(e) => setLetter(e.target.value)} ref={letterInpuRef} />
					<button className="gameButton" type="submit">Enviar</button>
				</form>
			</div>
			<div className="wrongLetters">
				<p>Letras já utilizadas</p>
				{wrongLetters.map((letter) => (
					<span key={letter}>{letter},</span>
				))}
			</div>
		</div>
	)
}
