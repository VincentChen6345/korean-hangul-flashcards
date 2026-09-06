export default function CardFront({ card, isLoading, error }) {
  return (
    <div className="card-front">
      {isLoading && <Loader />}
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && !error && card && (
        <>
          <span className="tag">{card.type}</span>
          <span className="character">{card.char}</span>
          <span className="reveal">Click to reveal</span>
        </>
      )}
    </div>
  );
}

function Loader() {
  return (
    <div className="loader">
      <p className="loading-text-1">
        Loading flashcards <br></br>Please wait a moment...
      </p>
      <br></br>
      <span>잠짠만요...</span>
    </div>
  );
}
function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}

//check that error message is working normally
