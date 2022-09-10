import React, { useState, useEffect } from "react";
import "./app.css";
import Container from "./composant/Container";

/*const winnerCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];*/

function App() {
  const [element, setElement] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(true);
  const [winner, setWinner] = useState("the Winner...");

  //check winner
  useEffect(() => {
    //0,1,2
    if (element[0] === "x" && element[1] === "x" && element[2] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[0] === "o" && element[1] === "o" && element[2] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
    //0,4,8
    if (element[0] === "x" && element[4] === "x" && element[8] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[0] === "o" && element[4] === "o" && element[8] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
    //3,4,5
    if (element[3] === "x" && element[4] === "x" && element[5] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[3] === "o" && element[4] === "o" && element[5] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
    //0,3,6
    if (element[0] === "x" && element[3] === "x" && element[6] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[0] === "o" && element[3] === "o" && element[6] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
    //1,4,7
    if (element[1] === "x" && element[4] === "x" && element[7] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[1] === "o" && element[4] === "o" && element[7] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
    //2,4,6
    if (element[2] === "x" && element[4] === "x" && element[6] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[2] === "o" && element[4] === "o" && element[6] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
    //2,5,8
    if (element[2] === "x" && element[5] === "x" && element[8] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[2] === "o" && element[5] === "o" && element[8] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
    //6,7,8
    if (element[6] === "x" && element[7] === "x" && element[8] === "x") {
      setWinner("player X win");
      setTimeout(reset, 1500);
    }
    if (element[6] === "o" && element[7] === "o" && element[8] === "o") {
      setWinner("player O win");
      setTimeout(reset, 1500);
    }
  }, [element]);

  //put X/O
  const handleClick = (id) => {
    const updateElement = element.map((value, index) => {
      if (id === index) {
        return xturn ? "x" : "o";
      } else {
        return value;
      }
    });
    setElement(updateElement);
    setXturn(!xturn);
  };

  //console.log(element);

  // Event reset Button
  const reset = () => {
    const newElements = element.map(() => {
      return null;
    });
    setElement(newElements);
    setXturn(true);
    setWinner("the Winner...");
  };

  return (
    <div className="app">
      <h1>{winner}</h1>
      <Container container={element} onClick={handleClick} />
      <button className="reset" onClick={reset}>
        reset
      </button>
    </div>
  );
}

export default App;
