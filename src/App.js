import React, { useState } from "react";
import "./styles.css";

const fruitsDictionary = {
  "🍇": "Grapes",
  "🍌": "Banana",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🍋": "Lemon",
  "🍎": "Apple",
  "🍍": "Pineapple"
};

const fruits = Object.keys(fruitsDictionary);

export default function App() {
  const [fruit, setGame] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputFruit = event.target.value;
    setGame(inputFruit);

    if (inputFruit in fruitsDictionary) {
      setMeaning(fruitsDictionary[inputFruit]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputFruit) {
    setMeaning(fruitsDictionary[inputFruit]);
  }

  return (
    <div className="App">
      <h1>Fruits Dictionary</h1>
      <input
        onChange={changeHandler}
        value={fruit}
        placeholder={"Search your emoji"}
        style={{
          padding: "1rem",
          minWidth: "90%"
        }}
      />
      <h2> {meaning} </h2>
      {fruits.map((fruit) => (
        <span
          key={fruit}
          onClick={() => emojiClickHandler(fruit)}
          style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
        >
          {fruit}
        </span>
      ))}
    </div>
  );
}
