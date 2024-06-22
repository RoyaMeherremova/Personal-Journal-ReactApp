import "./Button.css";
function Button() {
  const clicked = () => {};
  return (
    <button onClick={clicked} className="button accent">
      Сохранить
    </button>
  );
}

export default Button;
