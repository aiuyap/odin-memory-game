export function Hero({ heroInfo }) {
  return (
    <div className="w-40 bg-black bg-opacity-50 p-8">
      <img
        className="w-full"
        src={
          "https://dotabase.dillerm.io/vpk/panorama/images/heroes/" +
          heroInfo[16].name +
          "_png.png"
        }
        alt="Dota Hero"
      />
      <h2>{heroInfo[16].localized_name}</h2>
    </div>
  );
}
