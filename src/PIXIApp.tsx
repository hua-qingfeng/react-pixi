import { Stage } from "@inlet/react-pixi";
import { useContext } from "react";
import { PositionContext, RadiusContext } from "./Context/RadiusContext";
import { Rectangle } from "./withReactPixi/Rectangle";

export const PIXIApp = () => {
  const radius = useContext(RadiusContext)
  const position = useContext(PositionContext)
  return (
    <Stage
      width={600}
      height={300}
      options={{
        backgroundColor: 0xffffff,
      }}
    >
      <RadiusContext.Provider value={radius}>
        <PositionContext.Provider value={position}>
          <Rectangle />
        </PositionContext.Provider>
      </RadiusContext.Provider>
    </Stage>
  );
};
