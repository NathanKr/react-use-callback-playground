import { useState, useCallback, useEffect } from "react";
import ChildPureComponent from "./ChildPureComponent";

const Parent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isProblem, setIsProblem] = useState(true);

  useEffect(() => console.log("Parent render"));
  const parentElem = (
    <>
      <h2>Parent</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increment counter 1</button>
      <p>count1 : {count1}</p>
      <p>count2 : {count2}</p>
    </>
  );

  const childElemWithoutUseCallback = (
    <>
      <h2>
        call ChildPureComponent <span style={{ color: "red" }}>without</span>{" "}
        useCallback
      </h2>
      <p>
        Increment counter 1 will cause ChildPureComponent to render even
        though it has nothing to do with counter 1, check the console
      </p>
      <ChildPureComponent
        text="Increment counter 2"
        clickHandler={() => setCount2(count2 + 1)}
      />
    </>
  );

  const childElemWithUseCallback = (
    <>
      <h2>
        call ChildPureComponent <span style={{ color: "green" }}>with</span>{" "}
        useCallback.
      </h2>
      <p>
        Increment counter 1 will not cause ChildPureComponent to render , check the console
      </p>
      <ChildPureComponent
        text="Increment counter 2"
        clickHandler={useCallback(() => setCount2(count2 + 1), [count2])}
      />
    </>
  );

  return (
    <div>
      <label>Toggle</label>{" "}
      <input onChange={() => setIsProblem(!isProblem)} type="checkbox" />
      {parentElem}
      {isProblem ? childElemWithoutUseCallback : childElemWithUseCallback}
    </div>
  );
};

export default Parent;
