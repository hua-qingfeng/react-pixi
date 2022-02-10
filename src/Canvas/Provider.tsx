import { Container } from "pixi.js";
import { createContext, FC, useContext } from "react";
import { useStage } from "./Stage";

interface ContainerCtxProps {
  container: Container | null;
}
const ContainerCtx = createContext({} as ContainerCtxProps);

export const Provider: FC<ContainerCtxProps> = ({ container, children }) => {
  return (
    <ContainerCtx.Provider
      value={{
        container,
      }}
    >
      {children}
    </ContainerCtx.Provider>
  );
};

export const useContainer = () => {
  const ctx = useContext(ContainerCtx);
  const stage = useStage();
  return ctx.container || stage.app.stage;
}
