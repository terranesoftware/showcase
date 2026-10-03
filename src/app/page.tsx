import { Card, products } from "../components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.hero}>
        <h1 className={styles.title}>terrane</h1>
        <p className={styles.tagline}>Everything, eventually.</p>
      </header>
      {products.sort((a, b) => a.name.localeCompare(b.name)).map((product) => (
        <Card key={product.name} {...product} />
      ))}
      <footer className={styles.footer}>
        <p className={styles.closer}>
          That's all we have, so here's the <a className="link" href="https://github.com/terranesoftware/showcase">source</a>.
        </p>
      </footer>
    </main>
  );
}