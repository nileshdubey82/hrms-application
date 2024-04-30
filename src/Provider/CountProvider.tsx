import { createContext, useContext, useState } from "react";

const CountContext = createContext<CounterValue | null>(null);

interface CounterProps {
  children: React.ReactNode;
}
interface CounterValue {
  value: number;
  setCount: (num: number) => void;
}

export const usecounter = () => useContext(CountContext);

export const CounterProvider: React.FC<CounterProps> = (props) => {
  const [count, setCount] = useState<number>(1);
  return (
    <CountContext.Provider
      value={{
        value: count,
        setCount,
      }}
    >
      {props.children}
    </CountContext.Provider>
  );
};
