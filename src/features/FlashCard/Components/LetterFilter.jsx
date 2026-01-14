import { useState } from "react";

export default function LetterFilter({ clickHandler, buttonID, setButtonID }) {
  return (
    <div className="filter-container">
      <button
        className={buttonID === "all" ? "selected" : ""}
        onClick={() => clickHandler("all")}
      >
        All
      </button>
      <button
        className={buttonID === "consonant" ? "selected" : ""}
        onClick={() => clickHandler("consonant")}
      >
        Consonants
      </button>
      <button
        className={buttonID === "vowel" ? "selected" : ""}
        onClick={() => clickHandler("vowel")}
      >
        Vowels
      </button>
    </div>
  );
}
