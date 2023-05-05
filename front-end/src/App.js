import { Link } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-leagueGolden">
        Leaderboard 
      </h1>
      <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
      >
      <Link to="/leaderboard">Leaderboard</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
      </nav>
    </>
    
  );
}

export default App;
