import { Graphics } from "pixi.js";
import { FC, useContext, useEffect, useMemo } from "react";
import { PositionContext } from "../Context/RadiusContext";
import { useContainer } from "./Provider";
import { useStage } from "./Stage";

interface RectangleProps {
  width: number;
  height: number;
  radius?: number;
  fillColor: number;
}
export const Rectangle: FC<RectangleProps> = ({
  width,
  height,
  radius = 0,
  fillColor,
  children,
}) => {
  const app = useContainer();
  const { x, y } = useContext(PositionContext)
  const obj = useMemo(() => new Graphics(), []);
  useEffect(() => {
    obj.clear();
    obj.beginFill(fillColor);
    obj.drawRoundedRect(0, 0, width, height, radius);
    app.addChild(obj);
    return () => {
      app.removeChild(obj);
    };
  }, [app, obj, fillColor, width, height, radius]);
  return <>{children}</>;
};
