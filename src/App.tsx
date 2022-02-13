import { useAtom } from "jotai";
import { useState } from "react";
import { Rectangle } from "./Canvas/Rectangle";
import { Rotation } from "./Canvas/Rotation";
import { Sprite } from "./Canvas/Sprite";
import { Stage } from "./Canvas/Stage";
import { sizeAtom } from "./store";

function App() {
  const [color, setColor] = useState(0xff0000);
  const [x, setX] = useState(100);
  const [rotate, setRotate] = useState(0)
  const [radius, setRadius ] = useState(144);
  const [size] = useAtom(sizeAtom)

  const changeRadius = () => setRadius(r => r + 10)
  return (
    <>
      <button
        onClick={() => {
          // setColor(0x00ff00);
          // setX(50);
          setRotate(0.7854)
        }}
      >
        set color
      </button>
      <button onClick={changeRadius}>set radius</button>
      <Stage width={1920} height={1080}>
        <Sprite x={x} y={100}>
          <Rotation rotation={rotate}>
            <Rectangle width={size.width} height={size.height} fillColor={color} radius={radius} />
          </Rotation>
        </Sprite>
      </Stage>
    </>
  );
}

export default App;
