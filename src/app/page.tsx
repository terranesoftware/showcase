import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.hero}>
        <h1 className={styles.title}>terrane</h1>
        <p className={styles.tagline}>Everything, eventually.</p>
      </header>
    </main>
  );
}