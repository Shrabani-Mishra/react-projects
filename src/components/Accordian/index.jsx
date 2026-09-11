//Single selection Accordian:Only one accordain item can be open at a time .Opening new item autometically close the prevous;y opened item.
// Multi Selection Accordian:Multiple Accordian item can be open simultaneously.Opening one item doesn't close the others.

import { useState } from "react";
import accordianData from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // Single Selection
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Multi Selection
  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];

    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>

      <div className="accordian">
        {accordianData && accordianData.length > 0 ? (
          accordianData.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {/* Single Selection */}
              {/* "If multiple selection is OFF AND this item is the currently selected item, show its answer." */}
              {!enableMultiSelection &&
              selected === dataItem.id ? (
                <div className="content">
                  {dataItem.answer}
                </div>
              ) : null}

              {/* Multi Selection */}
              {/* This checks whether the current item's ID is inside the multiple array. */}
              {/* If multi-selection is ON AND this item's ID exists in the multiple array, show the answer. Otherwise show nothing. */}
              {enableMultiSelection &&
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}


// Interview Question Answer: We use key={dataItem.id} in map() so React can uniquely identify each item and efficiently update, add, or remove elements without re-rendering the entire list.