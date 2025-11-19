export const EventDelegation = () => {
  const handlebuttonEvent = (event) => {
    if (event.target.tagName === "BUTTON") {
      alert(`${event.target.innerText} clicked`);
    }
  };

  return (
    <div onClick={handlebuttonEvent}>
      <button>button1</button>
      <button>button2</button>
      <button>button3</button>
    </div>
  );
};
