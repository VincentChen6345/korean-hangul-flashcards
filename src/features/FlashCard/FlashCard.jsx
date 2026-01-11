import "./FlashCard.css";
export default function FlashCard() {
  return (
    <div className="feature-container">
      <div className="heading">
        <h1 className="title-color ">Let's Learn Hangul! 🇰🇷</h1>
        <span className="title-color title">The Korean Alphabet</span>
      </div>
      <section className="section-container">
        <div className="card-counter">Card 6 of 14</div>
        <div className="filter-container">
          <button>All</button>
          <button>Consonants</button>
          <button>Vowels</button>
        </div>
        <div className="card-container">
          <span className="tag">CONSONANT</span>
          <span className="character">ㅈ</span>
          <span className="reveal">Click to reveal</span>
        </div>
        <div className="cardControl-container">
          <button>Previous</button>
          <button>Shuffle</button>
          <button>Next</button>
        </div>
      </section>
    </div>
  );
}
