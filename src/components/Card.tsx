import styles from "./Card.module.css";

interface Product {
  name: string;
  description: string;
  repository: string;
  family?: Product[];
  builtOn?: Product[];
}

const auspice: Product = {
  name: "auspice",
  description: "Programming in the multiverse.",
  repository: "https://github.com/terranesoftware/auspice"
};

const basin: Product = {
  name: "basin",
  description: "Varve's registry.",
  repository: "https://github.com/terranesoftware/basin"
}

const rebus: Product = {
  name: "rebus",
  description: "",
  repository: "https://github.com/terranesoftware/rebus"
};

const crux: Product = {
  name: "crux",
  description: "Sophisticated financial control.",
  repository: "https://github.com/terranesoftware/crux",
  builtOn: [rebus]
};

const estate: Product = {
  name: "estate",
  description: "Rent out your terminal.",
  repository: "https://github.com/terranesoftware/estate",
  builtOn: [rebus]
};

const framboid: Product = {
  name: "framboid",
  description: "Rust implementation of the Varve specification.",
  repository: "https://github.com/terranesoftware/framboid"
};

const gangway: Product = {
  name: "gangway",
  description: "It's like playing telephone.",
  repository: "https://github.com/terranesoftware/gangway"
};

const pecia: Product = {
  name: "pecia",
  description: "Text, and only text.",
  repository: "https://github.com/terranesoftware/pecia"
};

const ken: Product = {
  name: "ken",
  description: "The text editor is back.",
  repository: "https://github.com/terranesoftware/ken",
  builtOn: [pecia]
};

const mizuchi: Product = {
  name: "mizuchi",
  description: "Python implementation of the Koine specification.",
  repository: "https://github.com/terranesoftware/mizuchi"
};

const koine: Product = {
  name: "koine",
  description: "A universal, open format for quantitative analysis.",
  repository: "https://github.com/terranesoftware/koine",
  family: [mizuchi]
};

const mantle: Product = {
  name: "mantle",
  description: "Varve's network.",
  repository: "https://github.com/terranesoftware/mantle"
};

const ophite: Product = {
  name: "ophite",
  description: "Python implementation of the Varve specification.",
  repository: "https://github.com/terranesoftware/ophite"
};

const posit: Product = {
  name: "posit",
  description: "",
  repository: "https://github.com/terranesoftware/posit"
};

const varve: Product = {
  name: "varve",
  description: "A universal, open format for work.",
  repository: "https://github.com/terranesoftware/varve",
  family: [basin, framboid, mantle, ophite]
};

export const products: Product[] = [
  auspice,
  crux,
  estate,
  gangway,
  ken,
  koine,
  pecia,
  posit,
  rebus,
  varve
];

export function Card({ name, description, repository, family, builtOn }: Product) {
  return (
    <article id={name} className={styles.product}>
      <div className={styles.title}>
        <h2 className={styles.name}><a className="link" href={repository} target="_blank" rel="noopener noreferrer">{name}</a></h2>
        {/* ADD FAMILY HERE */}
        {builtOn && (
            builtOn.map((product) => (
              <h3 className={styles.builtOn}>Built on <a className="link" href={`#${product.name}`}>{product.name}</a></h3>
            ))
          )
        }
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}