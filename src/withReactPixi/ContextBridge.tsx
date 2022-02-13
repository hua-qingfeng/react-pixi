import { Context, FC, PropsWithChildren, ReactNode, useContext } from "react";

interface ContextBridgeProps<T> {
  Context: Context<T>;
  render: (children: ReactNode) => ReactNode;
}
export const ContextBridge = <T,>({
  children,
  Context,
  render,
}: PropsWithChildren<ContextBridgeProps<T>>) => {

  return (
    <Context.Consumer>
      {(value) =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  );
};
