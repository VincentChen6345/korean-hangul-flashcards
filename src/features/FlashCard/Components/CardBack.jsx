export default function CardBack({ isFlipped, setIsFlipped, card }) {
  if (!card) return null;

  const { char, type, sound, name, soundHint } = card;
  function playHangulSound(character) {
    const speech = new SpeechSynthesisUtterance(character);
    speech.lang = "ko-KR";
    speech.rate = type.includes("consonant") ? 1.1 : 0.7;
    speechSynthesis.speak(speech);
  }

  return (
    <div className="card-back" onClick={() => setIsFlipped(!isFlipped)}>
      <span className="tag tag-back">{type}</span>
      <span className="pronunciation"> {sound} </span>
      <div className={"char-description"}>
        <span className="hangul"> {char} </span>
        <span className="char-name"> {name} </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          playHangulSound(soundHint ? soundHint : char);
        }}
      >
        <span className="desktop-button">Play Sound</span>
        <span className="mobile-button">📢</span>
      </button>
    </div>
  );
}
