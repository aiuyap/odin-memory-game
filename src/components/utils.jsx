export function generateRandomHeroes() {
  const heroesIndex = [];
  for (let i = 0; i < 20; i++) {
    let index = Math.floor(Math.random() * 101);
    while (heroesIndex.includes(index)) {
      index = Math.floor(Math.random() * 101);
    }
    heroesIndex.push(index);
  }
  return heroesIndex;
}

export function shuffleHeroes(unshuffled) {
  let shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}
