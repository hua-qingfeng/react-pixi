import { FC, useEffect, useMemo } from "react";
import { Sprite as PixiSprite, Texture, Transform } from "pixi.js";
import { Provider, useContainer } from "./Provider";

interface SpriteProps {
  x?: number;
  y?: number;
  rotation?: number;
  anchor?: number;
  pivot?: {
    x: number
    y: number 
  }
}

export const Sprite: FC<SpriteProps> = ({ x = 0, y = 0, anchor = 1, rotation = 0, pivot, children }) => {
  const app = useContainer();
  const obj = useMemo(() => {
    return new PixiSprite();
  }, []);
  useEffect(() => {
    app.addChild(obj);
    return () => {
      app.removeChild(obj);
    };
  }, [obj]);
  useEffect(() => {
    obj.x = x;
    obj.y = y;
  }, [x, y]);
  useEffect(() => {
    obj.transform.rotation = rotation
  }, [obj, rotation])
  useEffect(() => {
    obj.anchor.set(anchor)
  }, [obj, anchor])
  useEffect(() => {
    if (pivot) 
      obj.pivot.set(pivot?.x, pivot?.y)
  }, [pivot])
  return <Provider container={obj}>{children}</Provider>;
};
