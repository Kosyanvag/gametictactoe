import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }
  const handleRestart = () => {
    setSquares(defaultSquares);
    setXIsNext(true);
  };
  const defaultSquares = Array(9).fill(null);

  const [squares, setSquares] = useState(defaultSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <h1>
        Game <span> X</span> and <span>O</span>
      </h1>
      <div className="status">{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button className="restart" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Game;
