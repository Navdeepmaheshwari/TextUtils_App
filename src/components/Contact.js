import React from "react";

export default function Contact(props) {
    const submitForm=()=>{
        props.showAlert("Your Form is Submitted","success");
        document.getElementById("exampleFormControlInput1").textarea=" ";
        
    }
  return (
    <>
      <h2
        style={{
          backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
        
      >
        Contact Us
      </h2>
      <div
        className="mb-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
        style={{
            backgroundColor: props.mode === "dark" ? "#7878786e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
        />
      </div>
      <div
        className="mb-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="name@example.com"
          style={{
            backgroundColor: props.mode === "dark" ? "#7878786e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
      <div
        className="mb-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label htmlFor="exampleFormControlInput3" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder=""
          style={{
            backgroundColor: props.mode === "dark" ? "#7878786e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
      <div
        className="mb-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Suggestion
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          //   column="5"
          style={{
            backgroundColor: props.mode === "dark" ? "#7878786e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <div>
        <button type="submit" onClick={submitForm} className="btn btn-primary mb-3"style={{
          color: props.mode === "dark" ? "black" : "white",
        }}>
          Submit
        </button>
      </div>
    </>
  );
}
