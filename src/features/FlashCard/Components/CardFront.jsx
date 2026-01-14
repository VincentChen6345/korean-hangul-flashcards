export default function CardFront({ card }) {
  const { type, char } = card;
  return (
    <div className={"card-front"}>
      <span className="tag">{type}</span>
      <span className="character">{char}</span>
      <span className="reveal">Click to reveal</span>
    </div>
  );
}
