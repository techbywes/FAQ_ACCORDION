import "./App.css";
import React, { useState } from "react";

function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  const handleClick1 = () => {
    setShowModal1(!showModal1);
  };

  const handleClick2 = () => {
    setShowModal2(!showModal2);
  };

  const handleClick3 = () => {
    setShowModal3(!showModal3);
  };

  const handleClick4 = () => {
    setShowModal4(!showModal4);
  };
  const handleClick5 = () => {
    setShowModal5(!showModal5);
  };

  return (
    <div className="container">
      <h2 className="faq">- FAQ -</h2>
      <div className="App">
        <button onClick={handleClick1}>
          Why Buy An Electric Bike{" "}
          <span> {showModal1 === true ? "-" : "+"} </span>
        </button>
        {showModal1 === true && (
          <div className="modul_board" onClick={handleClick1}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              deleniti. Eos non voluptatibus ratione doloribus odio dolores
              nulla quo neque vel in totam, ipsum deleniti inventore obcaecati
              pariatur doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Libero, deleniti. Eos
              non voluptatibus ratione doloribus odio dolores nulla quo neque
              vel in totam, ipsum deleniti inventore obcaecati pariatur
              doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim.
            </p>
          </div>
        )}

        <button onClick={handleClick2}>
          How To Choose An Electric Bike{" "}
          <span> {showModal2 === true ? "-" : "+"} </span>
        </button>
        {showModal2 === true && (
          <div className="modul_board" onClick={handleClick2}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              deleniti. Eos non voluptatibus ratione doloribus odio dolores
              nulla quo neque vel in totam, ipsum deleniti inventore obcaecati
              pariatur doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Libero, deleniti. Eos
              non voluptatibus ratione doloribus odio dolores nulla quo neque
              vel in totam, ipsum deleniti inventore obcaecati pariatur
              doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim.
            </p>
          </div>
        )}

        <button onClick={handleClick3}>
          How Will My Bike Be Delivered{" "}
          <span> {showModal3 === true ? "-" : "+"} </span>
        </button>
        {showModal3 === true && (
          <div className="modul_board" onClick={handleClick3}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              deleniti. Eos non voluptatibus ratione doloribus odio dolores
              nulla quo neque vel in totam, ipsum deleniti inventore obcaecati
              pariatur doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Libero, deleniti. Eos
              non voluptatibus ratione doloribus odio dolores nulla quo neque
              vel in totam, ipsum deleniti inventore obcaecati pariatur
              doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim.
            </p>
          </div>
        )}

        <button onClick={handleClick4}>
        What If There Is A Problem With My Bike{" "}
          <span> {showModal4 === true ? "-" : "+"} </span>
        </button>
        {showModal4 === true && (
          <div className="modul_board" onClick={handleClick4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              deleniti. Eos non voluptatibus ratione doloribus odio dolores
              nulla quo neque vel in totam, ipsum deleniti inventore obcaecati
              pariatur doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Libero, deleniti. Eos
              non voluptatibus ratione doloribus odio dolores nulla quo neque
              vel in totam, ipsum deleniti inventore obcaecati pariatur
              doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim.
            </p>
          </div>
        )}
        <button onClick={handleClick4}>
        Care And Maintenance{" "}
          <span> {showModal5 === true ? "-" : "+"} </span>
        </button>
        {showModal5 === true && (
          <div className="modul_board" onClick={handleClick5}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              deleniti. Eos non voluptatibus ratione doloribus odio dolores
              nulla quo neque vel in totam, ipsum deleniti inventore obcaecati
              pariatur doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Libero, deleniti. Eos
              non voluptatibus ratione doloribus odio dolores nulla quo neque
              vel in totam, ipsum deleniti inventore obcaecati pariatur
              doloremque enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero, deleniti. Eos non voluptatibus ratione
              doloribus odio dolores nulla quo neque vel in totam, ipsum
              deleniti inventore obcaecati pariatur doloremque enim.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
