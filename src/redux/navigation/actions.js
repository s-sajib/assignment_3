import { ROUTE } from "./actionTypes";

export const changeRoute = (route) => {
  return {
    type: ROUTE,
    payload: route,
  };
};
