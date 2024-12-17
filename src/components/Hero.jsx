export function Hero({ heroInfo, key }) {
  return (
    <div key={key} className="max-w-40 bg-black bg-opacity-50 p-8">
      <img
        className="w-full"
        src={
          "https://dotabase.dillerm.io/vpk/panorama/images/heroes/" +
          heroInfo.name +
          "_png.png"
        }
        alt="Dota Hero"
      />
      <h2>{heroInfo.localized_name}</h2>
    </div>
  );
}
