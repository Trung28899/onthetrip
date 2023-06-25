import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  startLoading,
  completeLoading,
  resetLoading,
} from "@/store/reducers/loadingReducer";
import { useRedux } from "@/store/useRedux";

interface LoadingInterface {
  loading_count: number;
  startLoading: () => void;
  endLoading: () => void;
  resetLoading: () => void;
}

// loading_count > 0 -> loading show
// loading_count === 0 -> loading hidden
const useLoading = (): LoadingInterface => {
  const dispatch = useDispatch();
  const { state } = useRedux("loading");
  const { loading_count } = state;

  const startLoadingCallback = useCallback(() => {
    dispatch(startLoading());
  }, [dispatch]);

  const completeLoadingCallback = useCallback(() => {
    dispatch(completeLoading());
  }, [dispatch]);

  const resetLoadingCallBack = useCallback(() => {
    dispatch(resetLoading());
  }, [dispatch]);

  return {
    loading_count,
    startLoading: startLoadingCallback,
    endLoading: completeLoadingCallback,
    resetLoading: resetLoadingCallBack,
  };
};

export default useLoading;
