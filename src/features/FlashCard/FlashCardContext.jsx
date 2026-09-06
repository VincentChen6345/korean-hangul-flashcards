import { createContext, useContext, useState, useEffect } from "react";
import { useFetchAlphabet } from "./CustomHooks/useFetchAlphabet";
import { shuffleArray, filterDeckByType } from "./functions&variables";

const URL = `https://raw.githubusercontent.com/VincentChen6345/korean-hangul-flashcards/refs/heads/main/src/features/FlashCard/hangulData.json`;

const FlashCardContext = createContext(); //create the empty channel

//convenient custom hook to call instead of useContext(FlashCardContext)
export function useFlashCard() {
  return useContext(FlashCardContext);
}

//FlashCardProvider owns all state and handlers , broadcasts them to all children components via 'value' variable
export function FlashCardProvider({ children }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [selectedID, setSelectedID] = useState("all");
  const [selectedValue, setSelectedValue] = useState("all");

  //useFetchAlphabet custom hook
  const { alphabetData, error, isLoading } = useFetchAlphabet(URL);
  //sortedDeck depends on alphabetData that is fetched, this is initially set to [] on first render
  const sortedDeck = [...alphabetData].sort((a, b) =>
    a.type.localeCompare(b.type),
  );
  const [deck, setDeck] = useState(sortedDeck);
  const [length, setLength] = useState(deck.length);

  useEffect(
    //update deck and length when alphabetData fetch data arrives
    function () {
      setDeck(sortedDeck);
      setLength(sortedDeck.length);
    },
    [alphabetData],
  );

  const currCard = deck[cardIndex];

  function applyCardFilter(buttonType) {
    setSelectedID(buttonType);
    setSelectedValue(buttonType);
    const filteredDeck = filterDeckByType(sortedDeck, buttonType);
    setDeck(filteredDeck);
    setLength(filteredDeck.length);
    setCardIndex(0);
    setIsFlipped(false);
  }

  function cardNavHandler(type) {
    setIsFlipped(false);
    if (type === "Next") {
      setCardIndex((cardIndex) =>
        cardIndex === length - 1 ? 0 : cardIndex + 1,
      );
    }
    if (type === "Previous") {
      setCardIndex((cardIndex) =>
        cardIndex === 0 ? length - 1 : cardIndex - 1,
      );
    }
    if (type === "Shuffle") {
      const shuffled = shuffleArray([...deck]); //local copy
      setDeck(shuffled);
      setCardIndex(0);
    }
  }

  const value = {
    isFlipped,
    setIsFlipped,
    cardIndex,
    setCardIndex,
    selectedID,
    setSelectedID,
    selectedValue,
    error,
    isLoading,
    currCard,
    length,
    cardNavHandler,
    applyCardFilter,
  };

  return (
    <FlashCardContext.Provider value={value}>
      {children}
    </FlashCardContext.Provider>
  );
}
