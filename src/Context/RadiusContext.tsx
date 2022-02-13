import { createContext } from "react";

interface RadiusProps {
  radius: number;
}
export const RadiusContext = createContext({
  radius: 10
});


export const PositionContext = createContext({
  x: 0,
  y: 0
})
