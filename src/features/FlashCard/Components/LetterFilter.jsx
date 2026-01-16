import { filter_buttons } from "../functions&variables";
export default function LetterFilter({ clickHandler, buttonID }) {
  return (
    <div className="filter-container">
      {filter_buttons.map((btn) => (
        <button
          key={btn.type}
          className={buttonID === btn.type ? "selected" : ""}
          onClick={() => clickHandler(btn.type)}
        >
          {btn.labelDesktop}
        </button>
      ))}
      <select className="filter-select">
        {filter_buttons.map((btn) => {
          return <option key={btn.type}>{btn.labelMobile}</option>;
        })}
      </select>
    </div>
  );
}
