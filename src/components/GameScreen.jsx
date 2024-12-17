import { useEffect, useState } from "react";

export function GameScreen() {
  const url = "https://dota2-heroes.p.rapidapi.com/heroes/english/5";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "cdaff566f9mshe33558d87f8a1b4p1083f9jsn0fe2382c57f5",
      "x-rapidapi-host": "dota2-heroes.p.rapidapi.com",
    },
  };

  const [heroDetails, setHeroDetails] = useState({
    name: "",
    img: "",
  });

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setHeroDetails({ name: response.name_loc, img: response.thumb_image });
        console.log(response.name_loc);
      });
  }, []);

  return (
    <div>
      <header className="flex flex-wrap justify-center gap-16 bg-black bg-opacity-50 py-4 text-2xl font-extrabold text-white sm:gap-20 lg:gap-40">
        <h1>Score: </h1>
        <h1>Best Score: </h1>
      </header>
      <section className="text-white">
        <div>
          <img src={heroDetails.img} alt="Dota Hero" />
          <h2>{heroDetails.name}</h2>
        </div>
      </section>
    </div>
  );
}
