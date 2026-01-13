import "./FlashCard.css";
import Header from "./Components/Header";
import LetterFilter from "./Components/LetterFilter";
import CardFront from "./Components/CardFront";
import CardBack from "./Components/CardBack";
import { useState } from "react";

import CardControls from "./Components/CardControl";
export default function FlashCard() {
  const alphabet = [
    { id: 1, char: "ㄱ", type: "consonant", sound: "g/k", name: "giyeok" },
    { id: 2, char: "ㅏ", type: "vowel", sound: "a", name: null },
  ];
  const [isFlipped, setIsFlipped] = useState(false);
  function cardChangeHandler() {
    setIsFlipped(!isFlipped);
    console.log("triggered");
    console.log(isFlipped);
  }
  return (
    <div className="feature-container">
      <Header />
      <section className="section-container">
        <div className="card-counter">Card 6 of 14</div>
        <LetterFilter />
        <div
          className={`card-container ${isFlipped ? "flipped" : ""}`}
          onClick={cardChangeHandler}
        >
          <CardFront />
          <CardBack />
        </div>
        <CardControls />
      </section>
    </div>
  );
}
