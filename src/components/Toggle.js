import { useState } from "react";

function Toggle() {
  
  const [isOn, setIsOn] = useState(false);

  const color = isOn ? "green" : "red";

  const onClickHandler = () => {
    setIsOn(isOn => !isOn);
  };

  return <button onClick={onClickHandler} style={{background: color}}>{ isOn ? "ON" : "OFF" }</button>;
}

export default Toggle;
