import React from "react";
import { usecounter } from "./Provider/CountProvider";
import { useAppDispatch, useAppSelector } from "./Redux/Hooks/CounterHook";
import { decrease, increase} from "./Redux/Slices/CounterSlice";

interface MyButtonProps {
  text?: string;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = () => {
  // const context = usecounter();
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.value);
  console.log(count);
  console.log(dispatch);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increase())}> +</button>
      <button onClick={() => dispatch(decrease())}> -</button>
    </div>
  );
};
export default MyButton;
