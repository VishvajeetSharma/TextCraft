import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // UPPER CASE
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted To Upper Case", "success");
  };

  // lower case
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted To Lower Case", "success");
  };

  // Clear
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "warning");
  };

  // Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  // Remove Extra Spaces
  const handleSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Removed Extra Spaces", "success");
  };

  // Sentence Case
  const handleFirstLetter = () => {
    const sentences = text.split(". ");
    const updated = sentences.map((sentence) =>
      sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
    );
    setText(updated.join(". "));
    props.showAlert("Converted As Sentence Case", "success");
  };

  // Pascal Case
  const handlePascal = () => {
    const words = text.trim().split(/\s+/);
    const pascal = words
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
    setText(pascal);
    props.showAlert("Converted As Pascal Case", "success");
  };

  // camelCase
  const handleCamel = () => {
    const words = text.trim().split(/\s+/);
    const camel = words
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");

    const finalCamel =
      camel.charAt(0).toLowerCase() + camel.slice(1);

    setText(finalCamel);
    props.showAlert("Converted As Camel Case", "success");
  };

  // Confirm before camelCase
  const handleClick = () => {
    if (
      window.confirm(
        "It will remove all spaces from your text and you cannot revert it. Are you sure?"
      )
    ) {
      handleCamel();
    }
  };

  // snake_case
  const handleSnake = () => {
    const snake = text.trim().split(/\s+/).join("_");
    setText(snake);
    props.showAlert("Converted As Snake Case", "success");
  };

  // Snake to Normal
  const handleNormal = () => {
    const normal = text.split("_").join(" ");
    setText(normal);
    props.showAlert("Converted As Normal Text", "success");
  };

  const wordCount =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3 className="mb-3">{props.heading}</h3>

        <div className="pb-3">
          <textarea
            placeholder="Enter Your Text..."
            className="form-control"
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "rgb(33 37 50)"
                  : "white",
              color:
                props.mode === "dark"
                  ? "white"
                  : "black",
            }}
            value={text}
            onChange={handleOnChange}
            rows="5"
          ></textarea>
        </div>

        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleUpClick}>UPPER CASE</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleLowClick}>lower case</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleFirstLetter}>Sentence</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handlePascal}>Pascal</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleSnake}>Snake_case</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleNormal}>SnakeNormal</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleSpaces}>RemoveExtraSpaces</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleClick}>camelCase</button>
        <button disabled={!text} className="btn btn-primary me-2 my-1" onClick={handleCopy}>CopyText</button>
        <button disabled={!text} className="btn btn-danger me-2 my-1" onClick={handleClearClick}>Clear</button>
      </div>

      <div className="container mt-3">
        <h3>Your Text Summary</h3>
        <p>
          {wordCount} Words and {text.length} Characters
        </p>
        <p>{(0.010 * wordCount).toFixed(2)} Minutes Read</p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
};

export default TextForm;