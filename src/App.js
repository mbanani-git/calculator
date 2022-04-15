import React, { useState } from "react";

import {
  FaPaw,
  FaBackspace,
  FaPlus,
  FaMinus,
  FaTimes,
  FaDivide,
  FaPercentage,
  FaCircle,
  FaReact,
} from "react-icons/fa";
function App() {
  const [input, setInput] = useState("0");
  const [display, setDisplay] = useState(0);

  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };
  function ifValue(a) {
    if (a === "+" || a === "*" || a === "/" || a === "-" || a === ".") {
      return a;
    }
  }
  const handleClick = (e) => {
    let a = e.currentTarget.name;
    if (input.charAt(input.length - 2) === ifValue(a)) {
      setInput(input);
    } else if (input === "0" && a === "0") {
      setInput(input);
    } else if (/\w+\s\+\s/g.test(input) && (a === "*" || a === "/") && input.charAt(input.length - 2) === "+") {
      setInput(input.replaceAt(input.indexOf("", input.length - 2), a));
    } else if (/\w+\s\-\s/g.test(input) && (a === "*" || a === "/") && input.charAt(input.length - 2) === "-") {
      setInput(input.replaceAt(input.indexOf("", input.length - 2), a));
    } else if (input === "0" && a !== ifValue(a)) {
      setInput(a);
    } else if (/\w+\./g.test(input) && a === "." && !/\w+\.\w+\s/g.test(input)) {
      setInput(input);
    } else if (/\w+\.\w+\s[+-/*\/]\s\w+\./g.test(input) && a === ".") {
      setInput(input);
    } else {
      setInput(input.concat(a === "+" || a === "-" || a === "*" || a === "/" || a === "%" ? " " + a + " " : a));
    }
  };

  function looseJsonParse(obj) {
    return Function('"use strict";return (' + obj + ")")();
  }
  const calculate = () => {
    try {
      setInput(looseJsonParse(input).toString());
      setDisplay(input);
    } catch (error) {
      console.log(error);
    }
  };
  const clearAll = () => {
    setDisplay("0");
    setInput("0");
  };
  const deleteLast = (e) => {
    if (input.length === 1 && e.currentTarget.value === "d") {
      setInput("0");
    } else if (input.charAt(input.length - 1) === " ") {
      setInput(input.substr(0, input.length - 3));
    } else if (input.length > 0 && input !== "0") {
      setInput(input.substring(0, input.length - 1));
    }
  };
  const deleteInput = () => {
    setInput("0");
  };
  return (
    <div className="main">
      <div className="title">
        <img src="./azuki.png" alt="azuki" />
        <h1>Azuki's Calculator</h1>
      </div>
      <section className="calculator shadow p-3 mb-2  ">
        <div className="c-display">
          <div className="i-display">
            <p>{display}</p>
          </div>
          <div className="r-display">{input}</div>
        </div>
        <div className="c-buttons">
          <button className="b-grey-top" id="clear" onClick={clearAll}>
            C
          </button>
          <button className="b-grey-top" onClick={deleteInput}>
            CE
          </button>
          <button className="b-grey-top" onClick={deleteLast} value="d">
            <FaBackspace />
          </button>
          <button className="b-grey" onClick={handleClick} value="/" id="divide" name="/">
            <FaDivide />
          </button>
          <button className="b-white" onClick={handleClick} value="7" id="seven" name="7">
            7
          </button>
          <button className="b-white" onClick={handleClick} value="8" id="eight" name="8">
            8
          </button>
          <button className="b-white" onClick={handleClick} value="9" id="nine" name="9">
            9
          </button>
          <button className="b-grey" onClick={handleClick} value="*" id="multiply" name="*">
            <FaTimes />
          </button>
          <button className="b-white" onClick={handleClick} value="4" id="four" name="4">
            4
          </button>
          <button className="b-white" onClick={handleClick} value="5" id="five" name="5">
            5
          </button>
          <button className="b-white" onClick={handleClick} value="6" id="six" name="6">
            6
          </button>
          <button className="b-grey" onClick={handleClick} value="-" id="subtract" name="-">
            <FaMinus />
          </button>
          <button className="b-white" onClick={handleClick} value="1" id="one" name="1">
            1
          </button>
          <button className="b-white" onClick={handleClick} value="2" id="two" name="2">
            2
          </button>
          <button className="b-white" onClick={handleClick} value="3" id="three" name="3">
            3
          </button>
          <button className="b-grey" onClick={handleClick} value="+" id="add" name="+">
            <span>
              <FaPlus />
            </span>
          </button>
          <button className="b-white" onClick={handleClick} value="%" id="modulo" name="%">
            <FaPercentage />
          </button>
          <button className="b-white" onClick={handleClick} value="0" id="zero" name="0">
            0
          </button>
          <button className="b-white" onClick={handleClick} value="." id="decimal" name=".">
            <FaCircle />
          </button>
          <button className="b-red" onClick={calculate} id="equals">
            <FaPaw />
          </button>
        </div>
      </section>
      <div className="signature my-2">
        <p>
          By mbanani <a href="https://www.linkedin.com/in/mbdev-/">@mbdiv_ </a>
          using
          <a href="https://reactjs.org/">
            <FaReact className="react mx-1" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
