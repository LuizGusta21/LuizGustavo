import '../../src/styles/components/project.sass';

import { Swiper, SwiperSlide } from 'swiper/react';



import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpeg';
import image4 from '../img/4.png';

const images = [
  { id: 1, imagem: image1, text: "Apresentando o SecretWord, um jogo emocionante em React onde você deve acertar palavras! Ganhe pontos à medida que adivinha corretamente, com três tentativas para cada palavra. Receba dicas úteis e acompanhe as letras já utilizadas. Desafie-se e teste seu vocabulário com o SecretWord!", link: 'https://secretapalavra.netlify.app/' },
  { id: 2, imagem: image2, text: "Conheça o QuizProg, um site em React que desafia seus conhecimentos de programação! Teste suas habilidades respondendo perguntas e acumulando pontuação. E se quiser recomeçar, basta resetar o quiz. Desafie-se e aprimore suas habilidades de programação com o QuizProg!", link: 'https://quizprogr.netlify.app/' },
  { id: 3, imagem: image3, text: "Compartilhe, edite e explore suas imagens de forma fácil e segura! Desenvolvido com React e Firebase, o Mini Blog oferece recursos de edição, login seguro e uma página inicial para visualizar as postagens.", link: 'https://mini-blog-black.vercel.app/' },
  { id: 4, imagem: image4, text: "Um site React que permite explorar e descobrir filmes de forma simples. Com integração à API do The Movie Database (TMDB), oferecemos uma vasta biblioteca de informações sobre filmes, incluindo sinopse, elenco e classificações.", link: 'https://github.com/LuizGusta21/movies' },
];

const ProjectsContainer = () => {

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects">
        <div className='carrosel'>
          <Swiper
            className='swiper'
            slidesPerview={1}
            navigation
          >

            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="image">
                  <img src={image.imagem} alt={`Projeto ${image.id}`} className={`image${image.id}`} />
                </div>
                <div className="image-p">
                  <p>{image.text}</p>
                </div>
                <div className='image-a'>
                  <a href={image.link} className='btn-project' target='_blank'>Abrir Projeto</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>
        <a
          href="https://github.com/LuizGusta21?tab=repositories"
          target='_blank'
          className="btn"
        >
          Ver Mais Projetos
        </a>
      </div>
    </section >
  )
}

export default ProjectsContainer;