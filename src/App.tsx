import React, { useEffect, useContext } from "react";

const App = (props: any) => {
  const test = useContext(props.contextProps);
  const [post, setPost] = React.useState("Initsial");

  const [counter, setCounter] = React.useState(1);
  const handleButton = () => {
    setPost("TestFunctionCalssssssl");
    setCounter(2);
  };

  useEffect(() => {
    setPost("default Use effect");
  }, []);

  return (
    <div className="your-component">
      <button onClick={handleButton}>Test</button>
      {post}
    </div>
  );
};

export default App;
