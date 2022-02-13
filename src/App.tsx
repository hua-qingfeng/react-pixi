import { useAtom } from "jotai";
import { useState } from "react";
import { Rectangle } from "./Canvas/Rectangle";
import { Rotation } from "./Canvas/Rotation";
import { Sprite } from "./Canvas/Sprite";
import { Stage } from "./Canvas/Stage";
import { PositionContext, RadiusContext } from "./Context/RadiusContext";
import { MyApp } from "./MyApp";
// import { PIXIApp } from "./PIXIApp";
import { sizeAtom } from "./store";

function App() {
  const [color, setColor] = useState(0xff0000);
  const [rotate, setRotate] = useState(0);
  const [radius, setRadius] = useState(20);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const changeRadius = () => setRadius((r) => r + 4);
  console.log('App.tsx:16', radius);
  return (
    <>
      <div>
        <button onClick={changeRadius}>set radius</button>
      </div>
      <PositionContext.Provider
        value={{
          x: position.x,
          y: position.y,
        }}
      >
        <RadiusContext.Provider
          value={{
            radius,
          }}
        >
          {/* <PIXIApp /> */}
          <MyApp />
        </RadiusContext.Provider>
      </PositionContext.Provider>
    </>
  );
}

export default App;
