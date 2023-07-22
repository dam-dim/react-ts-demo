export function formatCategoryURL(page: string) {
  let temp = page.split(" ");

  let temp2 = temp
    .filter((el) => {
      return el != "&";
    })
    .map((el) => {
      return el.toLowerCase();
    });

  const output = temp2.join("-");

  return output;
}
