import { useState } from "react";

function MyButton() {
    const [count,setcount]=useState(0);
    const handleClick= () =>setcount((count)=>count+1)
  return (
    <>
    <button
    type="button"
    className="counter"
    onClick={handleClick}>
        count is {count}
    </button>
</>
  );
}

export default MyButton;