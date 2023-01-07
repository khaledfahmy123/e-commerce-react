import styles from "./productCardTemp.module.css";

const Product = (props) => {
  const { data, toggleHandler } = props;
  return (
    <>
      <article className={styles.card}>
        <input
          type="checkbox"
          className="delete-checkbox"
          onChange={toggleHandler}
          name={data.id}
        />
        <main>
          <p>{data.sku}</p>
          <p>{data.name}</p>
          <p>{data.price}$</p>
          <p>{data.description}</p>
        </main>
      </article>
    </>
  );
};

export default Product;
