import HighscoreTable from "./components/highscoreTable/highscoreTable";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import NewHighscore from "./components/registerHighscore/registerHighscore";
import GameDetails from "./components/gameDetails/gameDetails";

export let highscores = [
  {
    id: 1,
    game: "Tetris",
    date: "2020-01-01",
    player: "John Doe",
    score: 999999,
  },
  {
    id: 2,
    game: "Pacman",
    date: "2020-01-01",
    player: "John Doe",
    score: 999999,
  },
  {
    id: 3,
    game: "Asteroids",
    date: "2020-01-01",
    player: "John Doe",
    score: 999999,
  },
];

function addHighscore(highscore) {
  highscores.push(highscore);
}

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/" exact>
            Homepage
          </Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/">
          <HighscoreTable highscores={highscores} />
        </Route>
        <Route path="/new">
          <NewHighscore addHighscore={addHighscore} />
        </Route>
        <Route path={`/games/`}>
          <GameDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
