import styles from "./About.module.css";
import Skills from "../../components/Skills/Skills.jsx";

export default function About() {
  return (
    <>
      <section id="sobre" className={styles.section__about}>
        <div className="main-container">
          <h2 className="h2_style">
            <span className="h2_style_span">Sobre Mim</span>
            <span className="h2_style_span_sub">
              Abaixo estão mais informações sobre minhas habilidades como
              desenvolvedor
            </span>
          </h2>
          <div className={styles.about__grid}>
            <div className={styles.about__grid__text}>
              <h3 className={styles.about__grid__title}>Me Conheça!</h3>
              <p className={styles.about__grid__text__text}>
                Eu sou um <strong>desenvolvedor Frontend</strong> multifacetado
                com uma paixão pela criação de experiências online excepcionais.
                Minha especialização em frontend é respaldada por sólidas
                habilidades em JavaScript, React e TypeScript, permitindo-me
                criar interfaces de usuário interativas e envolventes. Além
                disso, meu domínio do Node.js e do desenvolvimento backend me
                capacita em um melhor desenvolvedor, abrangendo novas áreas.
              </p>
              <p className={styles.about__grid__text__text2}>
                Estou pronto para contribuir de forma significativa para
                projetos ambiciosos, fornecendo soluções de alta qualidade que
                impulsionam o sucesso. Vamos trabalhar juntos e tornar suas
                visões digitais em realidade!
              </p>
              <a href="#contact" className="btn btn-medium">
                Contato
              </a>
            </div>
            <div className={styles.about__grid__skills}>
              <h3 className={styles.about__grid__title}>Minhas Habilidades</h3>
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
