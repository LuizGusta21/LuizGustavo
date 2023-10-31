import styles from "./Projects.module.css";
import Slider from "react-slick";

import image1 from "../../assets/palavra.png";
import image2 from "../../assets/qr.png";
import image3 from "../../assets/miniblog.png";
import image4 from "../../assets/filme.png";
import image5 from "../../assets/picvibes.png";

export default function Projects() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: false,
  };

  const projetos = [
    {
      title: "SecretWord",
      id: 1,
      imagem: image1,
      text: "Apresentando o SecretWord, um jogo emocionante em React onde você deve acertar palavras! Ganhe pontos à medida que adivinha corretamente, com três tentativas para cada palavra. Receba dicas úteis e acompanhe as letras já utilizadas. Desafie-se e teste seu vocabulário com o SecretWord!",
      link: "https://secretapalavra.netlify.app/",
    },
    {
      title: "QR Code Generator",
      id: 2,
      imagem: image2,
      text: "Apresenta-se um site de geração de QR codes, permitindo a criação automática de QR codes personalizados para qualquer link ou informação inserida. Os usuários têm a opção de fazer o download dos QR codes gerados, tornando o compartilhamento de informações digitais uma tarefa simples e eficiente.",
      link: "https://github.com/LuizGusta21/qrcode-generator",
    },
    {
      title: "Mini Blog",
      id: 3,
      imagem: image3,
      text: "Compartilhe, edite e explore suas imagens de forma fácil e segura! Desenvolvido com React e Firebase, o Mini Blog oferece recursos de edição, login seguro e uma página inicial para visualizar as postagens.",
      link: "https://mini-blog-black.vercel.app/",
    },
    {
      title: "Movies Library",
      id: 4,
      imagem: image4,
      text: "Um site React que permite explorar e descobrir filmes de forma simples. Com integração à API do The Movie Database (TMDB), oferecemos uma vasta biblioteca de informações sobre filmes, incluindo sinopse, elenco e classificações.",
      link: "https://github.com/LuizGusta21/movies",
    },
    {
      title: "PicVibes",
      id: 5,
      imagem: image5,
      text: "PicVibes é a plataforma social perfeita para compartilhar suas fotos, conectar-se com amigos e muito mais. Desenvolvido com tecnologia de ponta, nosso sistema de autenticação, base de dados segura do MongoDB e uma interface elegante de front-end React, com um gerenciador de estados implementado através do Redux, garantem uma experiência de usuário excepcional. Com PicVibes, você pode compartilhar fotos, adicionar comentários, curtir e dar deslikes, tornando a interação com suas imagens ainda mais envolvente. Além disso, nosso backend robusto, construído com Node.js, mantém tudo funcionando perfeitamente.",
      link: "https://github.com/LuizGusta21/picvibe_frontend",
    },
  ];

  return (
    <>
      <section id="projetos" className={styles.section}>
        <div className="main-container">
          <h2 className="h2_style">
            <span className="h2_style_span">Projetos</span>
            <span className="h2_style_span_sub">
              Abaixo estão alguns dos meus projetos
            </span>
          </h2>
          {projetos.map((project) => (
            <div className={styles.project} key={project.id}>
              <div className={styles.project_img}>
                <img
                  src={project.imagem}
                  alt={project.title}
                  className={styles.img}
                />
              </div>
              <div className={styles.project_description}>
                <h3 className={styles.project_title}>{project.title}</h3>
                <p className={styles.project_text}>{project.text}</p>
                <a
                  target="_blank"
                  className="btn btn-medium"
                  href={project.link}
                >
                  Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
