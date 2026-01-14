export default function CardBack({ isFlipped, setIsFlipped, card }) {
  const { char, type, sound, name } = card;
  function playHangulSound(character) {
    const speech = new SpeechSynthesisUtterance(character);
    speech.lang = "ko-KR";
    speech.rate = 0.7;
    speechSynthesis.speak(speech);
  }
  return (
    <div className="card-back" onClick={() => setIsFlipped(!isFlipped)}>
      <span className="tag tag-back">{type}</span>
      <span className="pronunciation"> {sound} </span>
      <span className="hangul"> {char} </span>
      <span className="char-name"> {name} </span>
      <button onClick={() => playHangulSound(char)}>Play Sound</button>
    </div>
  );
}

//implement soundhint to assist the speech translation for consonants
