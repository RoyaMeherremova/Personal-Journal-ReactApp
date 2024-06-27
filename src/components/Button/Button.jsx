import "./Button.css";
//import { useState } from "react";
function Button() {
  //const [text, setText] = useState("Сохранить");
  const clicked = () => {};
  return (
    <button onClick={clicked} className="button accent">
      Сохранить
    </button>
  );
}

export default Button;
