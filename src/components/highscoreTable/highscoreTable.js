import { Link } from "react-router-dom";

const HighscoreTable = ({ highscores }) => {
  return (
    <div className="fullDiv">
      <h1 className="highscoreTitle">HIGHSCORES</h1>
      <Link to="/new">
        <p className="registerLink">Register Highscore</p>
      </Link>
      {highscores.map((highscore) => (
        <div className="gameDiv" key={highscore.id}>
          <Link to={`/games/${highscore.game}`}>
            <h3>{highscore.game}</h3>
          </Link>
          <p className="nameAndDate">
            {highscore.player}, {highscore.date}
          </p>
          <p className="scoreHeader">{highscore.score}</p>
        </div>
      ))}
    </div>
  );
};

export default HighscoreTable;
