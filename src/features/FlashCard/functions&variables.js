const alphabet = [
  { id: 1, char: "ㄱ", type: "consonant", sound: "g/k", name: "[giyeok]" },
  { id: 2, char: "ㅏ", type: "vowel", sound: "a", name: null },
  { id: 3, char: "ㄴ", type: "consonant", sound: "n", name: "[nieun]" },
  { id: 4, char: "ㄷ", type: "consonant", sound: "d/t", name: "[digeut]" },
  { id: 5, char: "ㄹ", type: "consonant", sound: "r/l", name: "[rieul]" },
  { id: 6, char: "ㅁ", type: "consonant", sound: "m", name: "[mieum]" },
  { id: 7, char: "ㅂ", type: "consonant", sound: "b/p", name: "[bieup]" },
  { id: 8, char: "ㅅ", type: "consonant", sound: "s", name: "[siot]" },
  { id: 9, char: "ㅇ", type: "consonant", sound: "-ng", name: "[ieung]" },
  { id: 10, char: "ㅈ", type: "consonant", sound: "j/ch", name: "[jieut]" },
  { id: 11, char: "ㅊ", type: "consonant", sound: "ch", name: "[chieut]" },
  { id: 12, char: "ㅋ", type: "consonant", sound: "k", name: "[kieuk]" },
  { id: 13, char: "ㅌ", type: "consonant", sound: "t", name: "[tieut]" },
  { id: 14, char: "ㅍ", type: "consonant", sound: "p", name: "[pieup]" },
  { id: 15, char: "ㅎ", type: "consonant", sound: "h", name: "[hieut]" },
  {
    id: 16,
    char: "ㄲ",
    type: "tense consonant",
    sound: "gg",
    name: "[san giyeok]",
  },
  {
    id: 17,
    char: "ㄸ",
    type: "tense consonant",
    sound: "dd",
    name: "[san digeut]",
  },
  {
    id: 18,
    char: "ㅃ",
    type: "tense consonant",
    sound: "bb",
    name: "[san bieup]",
  },
  {
    id: 19,
    char: "ㅆ",
    type: "tense consonant",
    sound: "ss",
    name: "[san siot]",
  },
  {
    id: 20,
    char: "ㅉ",
    type: "tense consonant",
    sound: "jj",
    name: "[san jieut]",
  },
  { id: 21, char: "ㅑ", type: "vowel", sound: "ya", name: null },
  { id: 22, char: "ㅓ", type: "vowel", sound: "eo", name: null },
  { id: 23, char: "ㅕ", type: "vowel", sound: "yeo", name: null },
  { id: 24, char: "ㅗ", type: "vowel", sound: "o", name: null },
  { id: 25, char: "ㅛ", type: "vowel", sound: "yo", name: null },
  { id: 26, char: "ㅜ", type: "vowel", sound: "oo", name: null },
  { id: 27, char: "ㅠ", type: "vowel", sound: "yoo", name: null },
  { id: 28, char: "ㅡ", type: "vowel", sound: "eu", name: null },
  { id: 40, char: "ㅣ", type: "vowel", sound: "i", name: null },
  { id: 29, char: "ㅢ", type: "vowel", sound: "eui", name: null },
  { id: 30, char: "ㅔ", type: "vowel", sound: "e", name: null },
  { id: 31, char: "ㅖ", type: "vowel", sound: "ye", name: null },
  { id: 32, char: "ㅐ", type: "vowel", sound: "ae", name: null },
  { id: 33, char: "ㅒ", type: "vowel", sound: "yae", name: null },
  { id: 34, char: "ㅚ", type: "vowel", sound: "we", name: null },
  { id: 35, char: "ㅙ", type: "vowel", sound: "we", name: null },
  { id: 36, char: "ㅞ", type: "vowel", sound: "we", name: null },
  { id: 37, char: "ㅟ", type: "vowel", sound: "wi", name: null },
  { id: 38, char: "ㅘ", type: "vowel", sound: "wa", name: null },
  { id: 39, char: "ㅝ", type: "vowel", sound: "wo", name: null },
];

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
export { alphabet, shuffleArray };
