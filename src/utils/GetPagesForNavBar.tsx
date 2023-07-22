import { getLiElementsNavBar } from "./GetLiElementsNavBar";

export const getPagesForNavBar = () => {
  return <ul>{getLiElementsNavBar()}</ul>;
};
