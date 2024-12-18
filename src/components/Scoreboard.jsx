export function Scoreboard({ score }) {
  return (
    <>
      <h1>
        Score: <span className="text-green-500">{score.currentScore}</span>
      </h1>
      <h1>
        Best Score: <span className="text-red-600">{score.bestScore}</span>
      </h1>
    </>
  );
}
