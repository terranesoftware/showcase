import { Card, products } from "../components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header id="header" className={styles.hero}>
        <h1 className={styles.title}>terrane</h1>
        <p className={styles.tagline}>Everything, eventually.</p>
      </header>
      {products.sort((a, b) => a.name.localeCompare(b.name)).map((product) => (
        <Card key={product.name} {...product} />
      ))}
      <footer className={styles.footer}>
        <a className={`${styles.closer} link`} href="#header">
          Damn, did it have to end?
        </a>
      </footer>
    </main>
  );
}