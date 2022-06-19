import React from "react";

export default function About(props) {
//   const [myStyle, setmyStyle] = useState({
//     color: "Black",
//     backgroundColor: "White",
//   });

//   const [btnText, setBtnText] = useState("Enable Dark Mode");

//   const toggleStyle = () => {
//     if (myStyle.color === "black") {
//       setmyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "1px solid white",
//       });
//       setBtnText("Enable Light Mode");
//     } else {
//       setmyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtnText("Enable Dark Mode");
//     }
//   };
  return (
    <div className="container"   style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h2 className="my-3 mx-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
             <strong> Services Provided</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
          >
            <div className="accordion-body">
               It is
              shown by default, until the collapse plugin adds the appropriate
               that we use to style each element. These 
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem sequi itaque quibusdam repellat numquam alias harum quia soluta amet nesciunt ab eius, iure enim porro blanditiis esse nisi hic et. Unde blanditiis, repudiandae ut, veritatis ducimus, accusantium rerum enim quos dolorem illum corporis reiciendis totam laboriosam! Iusto assumenda, quaerat cum veniam corporis quos beatae magni ipsa eos alias voluptatibus consectetur nobis praesentium, animi id reprehenderit voluptate, recusandae inventore at deserunt vel iure temporibus corrupti. Libero odit nemo molestiae distinctio.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
            <strong> Carrer Opportunity </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
          >
            <div className="accordion-body">
               It is
              hidden by default, until the collapse plugin adds the appropriate
               that we use to style each element. These
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos vitae dolor vero dicta nemo amet corporis suscipit, et alias omnis magnam enim soluta molestiae illo nulla quae quod veniam placeat quibusdam? Fugiat nostrum repellendus nemo a enim corporis tenetur sunt perferendis necessitatibus deserunt? Labore, dignissimos? Veniam eos ab error optio tempore rerum ratione veritatis enim maiores et quis, consectetur, minima illo facere corporis, ea aliquam! Dicta et autem assumenda, hic voluptas optio veritatis rerum dignissimos delectus earum obcaecati architecto! Itaque.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743a8" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>Blog</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
          >
            <div className="accordion-body">
              It is
              hidden by default, until the collapse plugin adds the appropriate
              that we use to style each element. These 
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laborum ut mollitia aliquid expedita ducimus inventore, ullam animi error omnis sequi cumque modi nesciunt totam labore rem necessitatibus unde temporibus vero ab eos maxime. Necessitatibus praesentium, amet sunt explicabo vel incidunt aliquid eaque. Fugiat, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam labore quibusdam cumque earum rerum doloribus, a dolor eos est, dignissimos ab consectetur quas itaque? Provident, eum eos est saepe quae sapiente dolore, voluptatum vitae, explicabo in rem repellat animi beatae tenetur neque quibusdam quidem iure.
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
