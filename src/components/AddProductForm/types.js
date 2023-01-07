const DVD = () => {
  return (
    <>
      <span>
        <label htmlFor="size">Size (MB)</label>
        <input
          type="number"
          required="required"
          name="size"
          id="size"
          placeholder="#size"
          min={0}
        />
      </span>
    </>
  );
};

const Book = () => {
  return (
    <>
      <span>
        <label htmlFor="weight">Weight (KG)</label>
        <input
          type="number"
          required="required"
          name="weight"
          id="weight"
          placeholder="#weight"
          min={0}
        />
      </span>
    </>
  );
};

const Furniture = () => {
  return (
    <>
      <span>
        <label htmlFor="height">height (CM)</label>
        <input
          type="number"
          required="required"
          name="height"
          id="height"
          placeholder="#height"
          min={0}
        />
      </span>
      <span>
        <label htmlFor="width">width (CM)</label>
        <input
          type="number"
          required="required"
          name="width"
          id="width"
          placeholder="#width"
          min={0}
        />
      </span>
      <span>
        <label htmlFor="len">length (CM)</label>
        <input
          type="number"
          required="required"
          name="len"
          id="length"
          placeholder="#length"
          min={0}
        />
      </span>
    </>
  );
};

const Types = {
  noValue: {
    compo: <></>,
    txt: "kindly select a type to display the rest of the fields",
    title: "-- select an option --",
  },

  dvd: { compo: <DVD />, txt: "Please, provide size", title: "DVD" },

  book: {
    compo: <Book />,
    txt: "Please, provide weight",
    title: "Book",
  },

  furniture: {
    compo: <Furniture />,
    txt: "Please, provide dimensions",
    title: "Furniture",
  },
};

export default Types;
