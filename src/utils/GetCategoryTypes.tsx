import data from "../data/data.json";

export function getCategoryTypes(category: string) {
  let output: string[] = [];

  let currentCategory = data[category as keyof typeof data];

  currentCategory.forEach((element) => {
    if (!output.includes(element.type)) {
      output.push(element.type);
    }
  });

  return output;
}
