import LetterFilter from "./LetterFilter";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardNavigation from "./CardNavigation";
import { useFlashCard } from "../FlashCardContext";

export default function FlashCardBoard() {
  const {
    //destructure from useFlashCard context
    cardIndex,
    isFlipped,
    setIsFlipped,
    selectedID,
    setSelectedID,
    selectedValue,
    length,
    currCard,
    isLoading,
    error,
    cardNavHandler,
    applyCardFilter,
  } = useFlashCard();

  return (
    <section className="section-container">
      <div className="card-counter">{`Card ${cardIndex + 1} of ${length}`}</div>
      <LetterFilter
        filterHandler={applyCardFilter}
        buttonID={selectedID}
        setButtonID={setSelectedID}
        selectedValue={selectedValue}
      />
      <div
        className={`card-container ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <CardFront card={currCard} isLoading={isLoading} error={error} />
        <CardBack card={currCard} />
      </div>
      <CardNavigation handleClick={cardNavHandler} />
    </section>
  );
}
