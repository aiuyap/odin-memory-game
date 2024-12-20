export function Hero({ heroInfo, onClick }) {
  return (
    <div
      onClick={() => onClick(heroInfo.id)}
      className="grid min-w-48 max-w-48 transform cursor-pointer rounded-xl bg-black bg-opacity-70 p-4 transition-transform md:hover:scale-110"
    >
      <img
        className="h-24 w-full"
        src={
          "https://dotabase.dillerm.io/vpk/panorama/images/heroes/" +
          heroInfo.name +
          "_png.png"
        }
        width="160"
        alt="Dota Hero"
      />
      <h2 className="pt-2 text-center align-bottom font-bold">
        {heroInfo.localized_name}
      </h2>
    </div>
  );
}
