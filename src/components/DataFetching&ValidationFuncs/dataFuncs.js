export const fetchData = () => {
  return fetch("https://e-commerce-frog.000webhostapp.com/").then((response) =>
    response.json()
  );
};

export const postData = (temp) => {
  console.log(temp);
  fetch("https://e-commerce-frog.000webhostapp.com/", {
    method: "post",
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(temp),
  })
    .then((res) => res.json())
    .then((recipes) => {
      console.log(recipes);
    });
};

export const deleteData = (temp) => {
  return fetch("https://e-commerce-frog.000webhostapp.com/", {
    method: "post",
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(temp),
  })
    .then((response) => response.json())
    .then((d) => console.log(d));
};

export const isFormValid = (products, dataFields) => {
  for (let i in products) {
    if (products[i].sku === dataFields.sku.value) {
      return [1, "enter valid sku, this product already exist"];
    }
  }

  switch (dataFields.types.value) {
    case "dvd":
      if (isNaN(dataFields.size.value)) {
        return [1, "enter a valid size"];
      }
      return [0, `Size: ${dataFields.size.value} MB`];

    case "book":
      if (isNaN(dataFields.weight.value)) {
        return [1, "enter a valid weight"];
      }
      return [0, `Weight: ${dataFields.weight.value} Kg`];

    case "furniture":
      if (
        isNaN(
          dataFields.height.value +
            dataFields.width.value +
            dataFields.len.value
        )
      ) {
        return [1, "enter a valid dimensions"];
      }
      return [
        0,
        `Dimensions: ${dataFields.height.value}x${dataFields.width.value}x${dataFields.len.value}`,
      ];
    default:
      break;
  }
};
