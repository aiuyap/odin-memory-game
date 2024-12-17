export function StartScreen() {
  return (
    <div className="bg-bg-img bg-cover bg-center">
      <div className="flex h-screen flex-col justify-center bg-black bg-opacity-50 align-middle text-white">
        <div className="grid">
          <h1 className="mb-10 text-center text-6xl font-bold">
            DotA Memory Game
          </h1>
          <button
            type="button"
            className="h-20 w-40 justify-self-center rounded-3xl bg-red-800 text-lg font-bold transition-colors hover:bg-red-950"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
