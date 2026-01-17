import { filter_buttons } from "../functions&variables";
import { useStates } from "react";

export default function LetterFilter({
  filterHandler,
  buttonID,
  selectChangeHandler,
  selectedValue,
}) {
  return (
    <div className="filter-container">
      {filter_buttons.map((btn) => (
        <button
          key={btn.type}
          className={buttonID === btn.type ? "selected" : ""}
          onClick={() => filterHandler(btn.type)}
        >
          {btn.labelDesktop}
        </button>
      ))}
      <select
        className="filter-select"
        value={selectedValue}
        onChange={(e) => filterHandler(e.target.value)}
      >
        {filter_buttons.map((btn) => {
          return (
            <option key={btn.type} value={btn.type}>
              {btn.labelMobile}
            </option>
          );
        })}
      </select>
    </div>
  );
}
