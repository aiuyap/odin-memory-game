import { useEffect, useState } from "react";
import { Hero } from "./Hero";

export function GameScreen() {
  const [heroInfo, setHeroInfo] = useState();
  const [heroList, setHeroList] = useState();

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
        generateRandomHeroes();
      })
      .catch((error) => alert(error));
  }, []);

  function generateRandomHeroes() {
    const heroesIndex = [];
    for (let i = 0; i < 20; i++) {
      let index = Math.floor(Math.random() * 101);
      while (heroesIndex.includes(index)) {
        index = Math.floor(Math.random() * 101);
      }
      heroesIndex.push(index);
    }
    setHeroList(heroesIndex);
  }

  return (
    <div>
      <header className="flex flex-wrap justify-center gap-16 bg-black bg-opacity-50 py-4 text-2xl font-extrabold text-white sm:gap-20 lg:gap-40">
        <h1>Score: </h1>
        <h1>Best Score: </h1>
      </header>
      <section className="flex flex-wrap justify-center gap-16 p-4 text-white lg:p-16">
        {heroInfo !== undefined &&
          heroList.map((hero) => {
            return <Hero key={hero} heroInfo={heroInfo[hero]} />;
          })}
      </section>
    </div>
  );
}
