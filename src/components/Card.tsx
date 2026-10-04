import { Fragment } from "react/jsx-runtime";
import styles from "./Card.module.css";

interface Product {
  name: string;
  description: string;
  repository: string;
  family?: Product[];
  familyClass?: string;
  builtOn?: Product[];
  builtOnClass?: string;
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

const gangway: Product = {
  name: "gangway",
  description: "It's like playing telephone — but with one person, repeatedly.",
  repository: "https://crates.io/crates/gangway"
};

const rebus: Product = {
  name: "rebus",
  description: "Dissociative identity disorder.",
  repository: "https://github.com/terranesoftware/rebus"
};

const crux: Product = {
  name: "crux",
  description: "Sophisticated financial control.",
  repository: "https://github.com/terranesoftware/crux",
  builtOn: [rebus],
  builtOnClass: "ml-auto max-[427px]:basis-full max-[427px]:ml-0"
};

const estate: Product = {
  name: "estate",
  description: "Rent out your terminal.",
  repository: "https://github.com/terranesoftware/estate"
};

const framboid: Product = {
  name: "framboid",
  description: "Rust implementation of the Varve specification.",
  repository: "https://github.com/terranesoftware/framboid"
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
  builtOn: [pecia],
  builtOnClass: "ml-auto max-[392px]:basis-full max-[392px]:ml-0"
};

const mizuchi: Product = {
  name: "mizuchi",
  description: "Python implementation of the Koine specification.",
  repository: "https://github.com/terranesoftware/mizuchi"
};

const koine: Product = {
  name: "koine",
  description: "Yet another lingua franca.",
  repository: "https://github.com/terranesoftware/koine",
  family: [mizuchi],
  familyClass: "ml-auto max-[358px]:basis-full max-[358px]:ml-0"
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
  description: "Seeing is believing.",
  repository: "https://github.com/terranesoftware/posit"
};

const varve: Product = {
  name: "varve",
  description: "Work shouldn't go to waste.",
  repository: "https://github.com/terranesoftware/varve",
  family: [basin, framboid, mantle, ophite],
  familyClass: "ml-auto max-[798px]:basis-full max-[798px]:ml-0"
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

export function Card({ name, description, repository, family, familyClass, builtOn, builtOnClass }: Product) {
  if (name == "" || description == "" || repository == "") {
    return null;
  }
  
  return (
    <article id={name} className={styles.product}>
      <div className={styles.title}>
        <h2 className={styles.name}><a className="link" href={repository} target="_blank" rel="noopener noreferrer">{name}</a></h2>
        {family && (
          <h3 className={`${styles.optional} ${familyClass ?? ""}`}>
            {
              family.map((product, index) => (
                <Fragment key={product.name}>
                  {index > 0 && " · "}
                  <a className="link" href={product.repository} target="_blank" rel="noopener noreferrer">{product.name}</a>
                </Fragment>
              ))
            }
          </h3>
        )}
        {/* Check how this styles once we actually need it. Could possibly need another optional field on the interface. */}
        {family && builtOn && <h3 className={`${styles.optional} ${styles.separator}`}> | </h3>}
        {builtOn && (
          <h3 className={`${styles.optional} ${builtOnClass ?? ""}`}>
            Built on{" "}
            {
              builtOn.map((product, index) => (
                <Fragment key={product.name}>
                  {index > 0 && " and "}
                  <a className="link" href={`#${product.name}`}>{product.name}</a>
                </Fragment>
              ))
            }
          </h3>
          )
        }
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}