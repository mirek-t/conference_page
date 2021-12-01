import { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputElement;
