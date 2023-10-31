import styles from "./Main.module.css";
import curriculo from "../../assets/Luiz Gustavo.pdf";

import Contatos from "../../components/Contatos/Contatos";
import Mouse from "../../components/Mouse/Mouse";
import About from "../About/About";

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.home__text}>
          <h1 className={styles.home__text__titulo}>
            Olá, me chamo Luiz Gustavo
          </h1>
          <div className={styles.home__text__sub}>
            <p className={styles.home__text__p}>
              Um desenvolvedor Frontend, com uma sólida base em várias
              tecnologias essenciais para a criação de experiências de usuário
              excepcionais na web.
            </p>
          </div>
          <div className={styles.home__button}>
            <a
              className="btn btn-bg"
              href={curriculo}
              download="Currículo (Luiz Gustavo)"
            >
              currículo
            </a>
          </div>
        </div>

        <Contatos />
        <Mouse />
      </main>
    </>
  );
}
