import data from "../data/data.json";

export function findItemById(id: string) {
  let output = {
    name: "",
    type: "",
    image: 0,
    price: 0,
  };

  Object.values(data).forEach((category) => {
    category.forEach((item) => {
      if (item.id === id) {
        output.name = item.name;
        output.type = item.type;
        output.image = item.image;
        output.price = item.price;
        return output;
      }
      return output;
    });
  });

  return output;
}
