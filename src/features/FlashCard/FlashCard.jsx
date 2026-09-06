import "./FlashCard.css";
import Header from "./Components/Header";
import FlashCardBoard from "./Components/FlashCardBoard";
import { FlashCardProvider } from "./FlashCardContext";

export default function FlashCard() {
  return (
    <FlashCardProvider>
      <div className="feature-container">
        <Header />
        <FlashCardBoard />
        <footer>
          <span className="name">by Vincent Chen</span>
        </footer>
      </div>
    </FlashCardProvider>
  );
}
