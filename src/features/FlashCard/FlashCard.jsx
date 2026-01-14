import "./FlashCard.css";
import Header from "./Components/Header";
import LetterFilter from "./Components/LetterFilter";
import CardFront from "./Components/CardFront";
import CardBack from "./Components/CardBack";
import { useState } from "react";
import { alphabet, shuffleArray } from "./functions&variables";
import CardNavigation from "./Components/CardNavigation";

export default function FlashCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [selectedID, setSelectedID] = useState("all");

  //create local copy of alphabet, sorted by type.
  const sortedDeck = [...alphabet].sort((a, b) => a.type.localeCompare(b.type));
  const [deck, setDeck] = useState(sortedDeck);
  const [length, setLength] = useState(deck.length);
  const currCard = deck[cardIndex];
  function filterHandler(buttonType) {
    setSelectedID(buttonType);
    const filteredDeck = sortedDeck.filter((el) =>
      el.type.includes(buttonType === "all" ? "" : buttonType)
    );
    setDeck(filteredDeck);
    setLength(filteredDeck.length);
    setCardIndex(0);
    setIsFlipped(false);
  }
  function cardNavHandler(type) {
    setIsFlipped(false);
    if (type === "Next") {
      setCardIndex((cardIndex) =>
        cardIndex === length - 1 ? 0 : cardIndex + 1
      );
    }
    if (type === "Previous") {
      setCardIndex((cardIndex) =>
        cardIndex === 0 ? length - 1 : cardIndex - 1
      );
    }
    if (type === "Shuffle") {
      const shuffled = shuffleArray([...deck]); //local copy
      setDeck(shuffled);
      setCardIndex(0);
    }
  }

  return (
    <div className="feature-container">
      <Header />
      <section className="section-container">
        <div className="card-counter">{`Card ${
          cardIndex + 1
        } of ${length}`}</div>
        <LetterFilter
          clickHandler={filterHandler}
          buttonID={selectedID}
          setButtonID={setSelectedID}
        />
        <div
          className={`card-container ${isFlipped ? "flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <CardFront card={currCard} />
          <CardBack card={currCard} />
        </div>
        <CardNavigation handleClick={cardNavHandler} />
      </section>
    </div>
  );
}

//fix - "all" filter button, it crashes when i switch back to "all"
