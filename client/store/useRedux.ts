import type { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";

const useRedux = <K extends keyof RootState>(stateKey: K) => {
  const dispatch = useDispatch();
  const selectedState = useSelector((state: RootState) => state[stateKey]);

  return {
    dispatch,
    state: selectedState,
  };
};

export { useRedux };
