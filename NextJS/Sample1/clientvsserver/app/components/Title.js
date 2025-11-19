"use client";
export default function Title() {
  const handleClick = () => {
    console.log("hi");
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" />
      <br></br>
      <button onClick={() => handleClick()}>submit</button>
    </div>
  );
}
