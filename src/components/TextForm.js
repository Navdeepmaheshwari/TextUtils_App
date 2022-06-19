import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
   props.showAlert("Converted to UpperCase","success");
  };
  const handleDownClick = () => {
    // console.log("UpperCase Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard","success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChane");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="my-3 mx-3">{props.heading}</h2>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
            style={{
              backgroundColor: props.mode === "dark" ? "#7878786e" : "#7c7c7c0a",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>

          <button className="btn btn-primary my-3 " onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button
            className="btn btn-danger my-3 mx-2"
            onClick={handleDownClick}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-success my-3 mx-1" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.length > 0 ? text.split(" ").length:0} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
