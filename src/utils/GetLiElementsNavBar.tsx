import { ReactNode } from "react";
import data from "../data/data.json";
import { formatCategoryURL } from "./FormatCategoryURL";

export const getLiElementsNavBar = () => {
  let output: ReactNode[] = [];
  const categories: string[] = Object.keys(data);

  categories.forEach((page) => {
    output.push(
      <li key={page}>
        <a href={formatCategoryURL(page)}>{page}</a>
      </li>
    );
  });

  return output;
};
