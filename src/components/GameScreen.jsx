import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { generateRandomHeroes, shuffleHeroes } from "./utils";
import { Loading } from "./Loading";
import { Scoreboard } from "./Scoreboard";

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
    setHeroList(() => shuffleHeroes(heroList));

    if (!clickedHeroes.includes(key)) {
      setClickedHeroes([...clickedHeroes, key]);
      setScore((current) => {
        if (current.currentScore + 1 > current.bestScore) {
          return {
            currentScore: current.currentScore + 1,
            bestScore: current.currentScore + 1,
          };
        }
        return { ...current, currentScore: current.currentScore + 1 };
      });
    } else {
      setScore((current) => {
        return { ...current, currentScore: 0 };
      });
      setClickedHeroes([]);
    }
  }

  return (
    <div className="mt-16">
      <header className="fixed top-0 z-20 flex w-full flex-wrap justify-center gap-16 bg-black bg-opacity-50 py-4 text-2xl font-extrabold text-white sm:gap-20 lg:gap-40">
        <Scoreboard score={score} />
      </header>
      <section className="flex flex-wrap justify-center gap-1 py-1 text-white md:gap-16 md:p-16">
        {heroInfo === undefined ? (
          <Loading />
        ) : (
          heroList.map((hero) => {
            return (
              <Hero
                onClick={handleClick}
                key={hero}
                heroInfo={heroInfo[hero]}
              />
            );
          })
        )}
      </section>
    </div>
  );
}
