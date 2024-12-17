import { useEffect, useState } from "react";
import { Hero } from "./Hero";

export function GameScreen() {
  const [heroInfo, setHeroInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data fetch unsuccessful, please reload the website");
        }
        return response.json();
      })
      .then((response) => setHeroInfo(response))
      .catch((error) => alert(error));
  }, []);

  return (
    <div>
      <header className="flex flex-wrap justify-center gap-16 bg-black bg-opacity-50 py-4 text-2xl font-extrabold text-white sm:gap-20 lg:gap-40">
        <h1>Score: </h1>
        <h1>Best Score: </h1>
      </header>
      <section className="text-white">
        <Hero heroInfo={heroInfo} />
      </section>
    </div>
  );
}
