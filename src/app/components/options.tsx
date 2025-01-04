"use client";

import { useState } from "react";

type Props = {
  options: { a: string; b: string; c: string; d: string };
  answer: string;
};

const Options = ({ options, answer }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState("");

  const onAnswerSubmit = () => {
    console.log(selectedOption);
    if (selectedOption === null)
      return setShowMessage("Please Select atleast one option");

    selectedOption === answer
      ? setShowMessage("Correct Answer")
      : setShowMessage("Incorrect Answer");
  };

  return (
    <div>
      {(Object.keys(options) as Array<keyof typeof options>).map(
        (optionKey) => (
          <div key={optionKey}>
            <input
              type="radio"
              id={optionKey}
              name="option"
              value={optionKey}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor={optionKey}>{options[optionKey]}</label>
          </div>
        )
      )}

      <p>{showMessage}</p>

      <button
        onClick={onAnswerSubmit}
        className="bg-blue-600 text-white px-7 py-4 rounded-2xl"
      >
        Check Answer
      </button>
    </div>
  );
};

export default Options;

// if answer is incorrect show warning and a button to stream soltuion
// if answer is correct then show (signal of correct answer )and a button to stream explanation and Next qs button
