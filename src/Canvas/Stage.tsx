import { Application } from "pixi.js";
import {
  createContext,
  FC,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as PIXI from 'pixi.js'

interface StageProps {
  width: number;
  height: number;
  backgroundColor?: number;
}

PIXI.settings.RESOLUTION = window.devicePixelRatio;

export const Stage: FC<StageProps> = ({
  width,
  height,
  backgroundColor = 0xffffff,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [app, setApp] = useState<Application | null>(null);
  useLayoutEffect(() => {
    if (canvasRef.current) {
      const app = new Application({
        width: width,
        height: height,
        view: canvasRef.current,
        backgroundColor,
      });
      app.render();
      setApp(app);
      return () => {
        setApp(null);
        app.destroy();
      };
    }
  }, []);
  return (
    <canvas ref={canvasRef} style={{
      width, height
    }}>
      {app && (
        <StageCtx.Provider
          value={{
            app,
          }}
        >
          {children}
        </StageCtx.Provider>
      )}
    </canvas>
  );
};

interface StageCtxProps {
  app: Application;
}
const StageCtx = createContext({} as StageCtxProps);

export const useStage = () => {
  return useContext(StageCtx);
};
