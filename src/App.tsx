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
  const [size] = useAtom(sizeAtom)
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
      <Stage width={1920} height={1080}>
        <Sprite x={x} y={100}>
          <Rotation rotation={rotate}>
            <Rectangle width={size.width} height={size.height} fillColor={color} />
          </Rotation>
        </Sprite>
      </Stage>
    </>
  );
}

export default App;
