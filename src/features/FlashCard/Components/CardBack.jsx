export default function CardBack({ isFlipped, setIsFlipped }) {
  return (
    <div className="card-back" onClick={() => setIsFlipped(!isFlipped)}>
      <span className="tag tag-back">CONSONANT</span>
      <span className="pronunciation"> j </span>
      <span className="hangul"> ㅈ </span>
      <span className="char-name"> [ jieut ] </span>
      <button>Play Sound</button>
    </div>
  );
}
