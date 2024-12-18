import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { generateRandomHeroes } from "./utils";

export function GameScreen() {
  const [heroInfo, setHeroInfo] = useState();
  const [heroList, setHeroList] = useState();
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });
  const [clickedHeroes, setClickedHeroes] = useState([]);

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data fetch unsuccessful, please reload the website");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response); //CONSOLE LOG
        setHeroInfo(response);
        setHeroList(generateRandomHeroes);
      })
      .catch((error) => alert(error));
  }, []);

  function handleClick(key) {
    if (!clickedHeroes.includes(key)) {
      setClickedHeroes([...clickedHeroes, key]);
      setScore((current) => {
        return { ...current, currentScore: current.currentScore + 1 };
      });
    } else {
      setScore({ ...score, currentScore: 0 });
      setClickedHeroes([]);
    }
  }

  return (
    <div>
      <header className="flex flex-wrap justify-center gap-16 bg-black bg-opacity-50 py-4 text-2xl font-extrabold text-white sm:gap-20 lg:gap-40">
        <h1>Score: {score.currentScore}</h1>
        <h1>Best Score: {score.bestScore}</h1>
      </header>
      <section className="flex flex-wrap justify-center gap-16 p-4 text-white lg:p-16">
        {heroInfo !== undefined &&
          heroList.map((hero) => {
            return (
              <Hero
                onClick={handleClick}
                key={hero}
                heroInfo={heroInfo[hero]}
              />
            );
          })}
      </section>
    </div>
  );
}
