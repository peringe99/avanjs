import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const NewHighscore = ({ addHighscore }) => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [game, setGame] = useState("");
  const [date, setDate] = useState("");
  const [player, setPlayer] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const highscore = {
      id,
      game,
      date,
      player,
      score,
    };

    setId(uuidv4(1));
    addHighscore(highscore);
    history.push("/");

    setGame("");
    setDate("");
    setPlayer("");
    setScore("");
  };

  return (
    <div className="registerForm">
      <h1>Register Highscore</h1>
      <form onSubmit={handleSubmit}>
        <label for="game">Game: </label>
        <input
          id="game"
          type="text"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        ></input>
        <br />
        <label for="player">Player: </label>
        <input
          id="player"
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        ></input>
        <br />
        <label for="date">Date: </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br />
        <label for="score">Score: </label>
        <input
          id="score"
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        ></input>
        <br />
        <button className="sendBtn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default NewHighscore;

// game, player, date, score//
