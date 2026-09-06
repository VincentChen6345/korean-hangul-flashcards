//Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array]; //dont mutate original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //Math.random()-> random number between 0 and 1
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    //create temp array on left and right, swap element i with j in one line
  }
  return shuffled;
}
const filter_buttons = [
  { type: "all", labelMobile: "All Characters", labelDesktop: "All" },
  { type: "consonant", labelMobile: "Consonants", labelDesktop: "Consonant" },
  { type: "vowel", labelMobile: "Vowels", labelDesktop: "Vowel" },
];
const nav_buttons = [
  {
    type: "Previous",
    label: "Previous",
    icon: "⬅️",
  },
  {
    type: "Shuffle",
    label: "Shuffle",
    icon: "🔀",
  },
  {
    type: "Next",
    label: "Next",
    icon: "➡️",
  },
];

function filterDeckByType(deck, buttonType) {
  return deck.filter((el) =>
    el.type.includes(buttonType === "all" ? "" : buttonType),
  );
}
export { shuffleArray, nav_buttons, filter_buttons, filterDeckByType };
