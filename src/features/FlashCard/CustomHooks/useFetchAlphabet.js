import { useEffect, useState } from "react";

export function useFetchAlphabet(url) {
  //error message state
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [alphabetData, setAlphabetData] = useState([]);

  useEffect(
    function () {
      async function fetchAlphabet() {
        try {
          setError("");
          setIsLoading(true);
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Something went wrong 😢 미안해요");
          }
          const data = await response.json();

          setAlphabetData(data);
          //when this state updates,FlashCard() is rerendered. During rerender, sortedDeck gets updated with new alphabetData
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchAlphabet();
    },
    [url],
  );

  return { alphabetData, error, isLoading };
}
//useEffect to update sortedDeck,deck,length when alphabetData arrives from fetch
