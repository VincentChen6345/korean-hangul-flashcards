import "./FlashCard.css";
import Header from "./Components/Header";
import FlashCardBoard from "./Components/FlashCardBoard";
import { FlashCardProvider } from "./FlashCardContext";
import { Footer } from "./Components/Footer";

export default function FlashCard() {
  return (
    <FlashCardProvider>
      <div className="feature-container">
        <Header />
        <FlashCardBoard />
        <Footer />
      </div>
    </FlashCardProvider>
  );
}
