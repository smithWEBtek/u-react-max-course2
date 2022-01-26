import { useState } from 'react';


const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(!changedText);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {/* <p>It's good to see you!</p> */}
      {changedText && <p>Changed!</p>}
      <button onClick={changedTextHandler}>Change the Text!</button>
    </div>
  )
}

export default Greeting;
