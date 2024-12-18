export function StartScreen({ onClick }) {
  return (
    <div className="flex h-screen w-screen flex-col justify-center bg-black bg-opacity-70 align-middle text-white">
      <div className="grid justify-center">
        <h1 className="mb-10 text-center text-6xl font-bold">
          DotA Memory Game
        </h1>
        <div className="px-4 text-gray-300">
          <h2 className="font-bold text-white">Instructions: </h2>
          <p>
            - Get points by clicking on a hero but don&apos;t click it more than
            once!
          </p>
          <p>- Test yourself on how many clicked heroes you can remember.</p>
          <p>- If you click a hero twice, the score will reset.</p>
        </div>
        <button
          onClick={onClick}
          type="button"
          className="m-4 h-20 w-40 justify-self-center rounded-3xl bg-red-800 text-lg font-bold transition-colors hover:bg-red-950"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
