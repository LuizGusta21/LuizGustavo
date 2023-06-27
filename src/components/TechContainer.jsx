import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiSass,
  DiReact,
} from 'react-icons/di';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { SiTypescript } from 'react-icons/si';

import '../styles/components/techcontainer.sass';

const starsPower = [
  <ul>
    <li>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </li>
  </ul>
];

const starsZero = [
  <ul>
    <li>
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
    </li>
  </ul>
];

const starsfour = [
  <ul>
    <li>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
    </li>
  </ul>
];
const starsthree = [
  <ul>
    <li>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
      <AiOutlineStar />
    </li>
  </ul>
];

const technologies = [
  {
    id: "html", name: "HTML5", know: starsPower, icon: <DiHtml5 />
  },
  { id: "css", name: "CSS3", know: starsfour, icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", know: starsfour, icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", know: starsthree, icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", know: starsthree, icon: <DiMysql /> },
  { id: "react", name: "React", know: starsfour, icon: <DiReact /> },
  { id: "sass", name: "Sass", know: starsfour, icon: <DiSass /> },
  { id: "ts", name: "Typescript", know: starsZero, icon: <SiTypescript /> },
];

const TechContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <span className='icon'>{tech.icon}</span>
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p className='stars'>
                {tech.know}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechContainer