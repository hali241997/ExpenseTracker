import { shallowEqual, useSelector } from "react-redux";
import { AppStateType } from "../../store/index";

export const useUserState = (): AppStateType["user"] =>
  useSelector((state: AppStateType) => state.user, shallowEqual);
