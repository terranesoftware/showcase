import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.hero}>
        <h1 className={styles.title}>terrane</h1>
        <p className={styles.tagline}>Everything, eventually.</p>
      </header>
      <footer className={styles.footer}>
        <p className={styles.closer}>
          That's all we have, so here's the <a className={styles.link} href="https://github.com/terranesoftware/showcase">source</a>.
        </p>
      </footer>
    </main>
  );
}