import { Graphics } from "@inlet/react-pixi";
import * as PIXI from 'pixi.js';
import { FC, useCallback, useContext } from "react";
import { PositionContext, RadiusContext } from "../Context/RadiusContext";


export const Rectangle: FC = () => {
  const { radius } = useContext(RadiusContext)
  const { x, y } = useContext(PositionContext);
  const draw = useCallback((g: PIXI.Graphics) => {
    g.clear();
    g.beginFill(0xff0000)
    g.drawRoundedRect(x, y, 100, 100, radius)
    g.endFill();
  }, [radius])
  console.log('Rectangle.tsx:5', radius);

  return <Graphics draw={draw} />
}