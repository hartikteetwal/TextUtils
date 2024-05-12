import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [color, setcolor] = useState({ color: "black" });
  const [Url, setUrl] = useState("");
  const [SUrl, setSUrl] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","info")

  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Empty","danger")
  };
  const handleSortClick = () => {
    let newText = text.split(" ");
    newText.sort()
    let sortText = newText.join(" ");
    setText(sortText);
    props.showAlert("Sort Text","success")
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleRed = () => {
    setcolor({ color: "red" });
  };
  const handleBlue = () => {
    setcolor({ color: "blue" });
  };
  const handleGreen = () => {
    setcolor({ color: "green" });
  };
  const handleYellow = () => {
    setcolor({ color: "orange" });
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","info")
  };
  const handleOnChange = (e) => {
    console.log("OnChange");
    setText(e.target.value);
  };
  const handleUrl = (e) => {
    setSUrl(Url);
  };
  const handleCopyClick = (e) => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied","success")
  };
  const handleExtraClick = (e) => {
    let newText = text.replace(/[ ]+/g," ");
    setText(newText)
    props.showAlert("Extra Space removed","info")
  };

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode==="light"?"dark":"light"} d-none d-sm-block `}>{props.heading}</h1>
        <h1 className={`text-${props.mode==="light"?"dark":"light"} d-block d-sm-none`}>Enter the text</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={color}
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="btns d-flex justify-content-center flex-wrap">
          <button className="btn btn-primary my-2 " onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary my-2" onClick={handleSortClick}>
            Sort Text
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>
            Clear
          </button>
          <button className="btn btn-primary my-2 " onClick={handleCopyClick}>
            Copy
          </button>
          <button className="btn btn-primary my-2 mx-2 " onClick={handleExtraClick}>
            Extra space remove
          </button>
        </div>
        <div className="color mt-2">
          <hr className={`text-${props.mode==="light"?"dark":"light"}`}/>
          <h3 className={`text-${props.mode==="light"?"dark":"light"}`}>Choose Text Color</h3>
          <div className="btn btn-danger my-2" onClick={handleRed}>
            Red
          </div>
          <div className="btn btn-primary my-2 mx-2" onClick={handleBlue}>
            Blue
          </div>
          <div className="btn btn-success my-2" onClick={handleGreen}>
            Green
          </div>
          <div className="btn btn-warning mx-2 my-2 text-light" onClick={handleYellow}>
            Yellow
          </div>
        </div>
      </div>
      <div className="container my-2">
        <h3 className={`text-${props.mode==="light"?"dark":"light"}`}>Your Text Summary</h3>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>
          <b>
            {text.split(" ").length} Words and {text.length} Characters
          </b>
        </p>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>
          <b>{0.03 * text.split(" ").length}min to read</b>
        </p>
        <h2 className={`text-${props.mode==="light"?"dark":"light"}`}>Preview</h2>
        <p className={`text-${props.mode==="light"?"dark":"light"}`} style={color}>{text.length>=1?text:"Enter something to preview here"}</p>
      </div>
      <hr className={`text-${props.mode==="light"?"dark":"light"}`}/>
      <div className="img">
        <div className="img-btn">
          <input
            type="text"
            placeholder="Enter Url"
            value={Url}
            onChange={handleUrlChange}
          />
          <button className="btn btn-danger mx-2" onClick={handleUrl}>
            Search
          </button>
        </div>
        <img className={`text-${props.mode==="light"?"dark":"light"}`} src={SUrl} alt='' />
      </div>
    </>
  );
}
