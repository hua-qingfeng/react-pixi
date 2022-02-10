import { Graphics } from "pixi.js";
import { FC, useEffect, useMemo } from "react";
import { useContainer } from "./Provider";
import { useStage } from "./Stage";

interface RectangleProps {
  width: number;
  height: number;
  fillColor: number;
}
export const Rectangle: FC<RectangleProps> = ({
  width,
  height,
  fillColor,
  children,
}) => {
  const app = useContainer();
  const obj = useMemo(() => new Graphics(), []);
  useEffect(() => {
    obj.beginFill(fillColor);
    obj.drawRect(0, 0, width, height);
    app.addChild(obj);
    return () => {
      app.removeChild(obj);
    };
  }, [app, obj, fillColor, width, height]);
  useEffect(() => {
    obj.beginFill(fillColor);
    obj.endFill();
  }, [fillColor, obj]);
  useEffect(() => {
    obj.width = width;
    obj.height = height;
  }, [obj, width, height]);
  return <>{children}</>;
};
