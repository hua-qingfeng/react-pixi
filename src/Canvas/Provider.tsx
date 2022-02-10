import { Container } from "pixi.js";
import { createContext, FC, useContext } from "react";
import { useStage } from "./Stage";

interface ContainerCtxProps {
  app: Container | null;
}
const ContainerCtx = createContext({} as ContainerCtxProps);

export const Provider: FC<ContainerCtxProps> = ({ app, children }) => {
  return (
    <ContainerCtx.Provider
      value={{
        app,
      }}
    >
      {children}
    </ContainerCtx.Provider>
  );
};

export const useContainer = () => {
  const ctx = useContext(ContainerCtx);
  const stage = useStage();
  return ctx.app || stage.app.stage;
}
