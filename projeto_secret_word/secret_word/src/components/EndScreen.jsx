import "./End.css"

export const EndScreen = ({ backStart, score }) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <p>Pontuação: <span>{score}</span></p>
      <button onClick={backStart}>Voltar</button>
    </div>
  )
}