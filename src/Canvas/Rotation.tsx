import { useAtom } from "jotai";
import { FC, useMemo } from "react";
import { sizeAtom } from "../store";
import { Sprite } from "./Sprite";

export const Rotation: FC<{
  rotation: number;
}> = ({ rotation, children }) => {
  const [size] = useAtom(sizeAtom);
  const pivot = useMemo(() => {
    return {
      x: size.width / 2,
      y: size.height / 2
    }
  }, [size])
  return (
    <Sprite
      rotation={rotation}
      anchor={0.5}
      pivot={pivot}
      x={pivot.x}
      y={pivot.y}
    >
      {children}
    </Sprite>
  );
};
