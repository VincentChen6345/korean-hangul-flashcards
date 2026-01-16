import { nav_buttons } from "../functions&variables";
export default function CardNavigation({ handleClick }) {
  return (
    <div className="cardControl-container">
      {nav_buttons.map((btn) => (
        <button key={btn.type} onClick={() => handleClick(btn.type)}>
          <span className="desktop-nav_button">{btn.label}</span>
          <span className="mobile-nav_button">{btn.icon}</span>
        </button>
      ))}
    </div>
  );
}
