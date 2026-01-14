export default function CardNavigation({ handleClick }) {
  return (
    <div className="cardControl-container">
      <button onClick={() => handleClick("Previous")}>Previous</button>
      <button onClick={() => handleClick("Shuffle")}>Shuffle</button>
      <button onClick={() => handleClick("Next")}>Next</button>
    </div>
  );
}

//when "next" button is clicked, setCardIndex++, rerender card
