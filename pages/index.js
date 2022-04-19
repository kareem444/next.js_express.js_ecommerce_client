import axios from "axios";
import CardItem from "../component/CardItem";
import styles from "../styles/Home.module.css";
import Head from 'next/head'

export default function Home({ products }) {
  return (
    <div className={styles.home_container}>
      <Head>
        <title>shopy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center my-2">
            <CardItem styles={styles} product={product}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await axios.get("http://localhost:3001/product");

  return {
    props: { products: products.data },
  };
}
