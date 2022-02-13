import { FC } from "react";
import { Rectangle } from "./Canvas/Rectangle";
import { Stage } from "./Canvas/Stage";

export const MyApp: FC = () => {
  return <Stage
    width={600}
    height={300}
  >
    <Rectangle width={100} height={100} fillColor={0x0000ff} />
  </Stage>
}