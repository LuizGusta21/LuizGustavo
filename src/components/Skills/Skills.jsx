import "./Skills.css";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiSass,
  DiReact,
} from "react-icons/di";

import { SiTypescript } from "react-icons/si";

export default function Skills() {
  const tech = [
    {
      id: "html",
      name: "HTML5",
      icon: <DiHtml5 />,
      color: "#e44d26",
    },
    { id: "css", name: "CSS3", icon: <DiCss3 />, color: "#1572b6" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, color: "#f0db4f" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, color: "#83cd29" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, color: "#00618a" },
    { id: "react", name: "React", icon: <DiReact />, color: "#61dafb" },
    { id: "sass", name: "Sass", icon: <DiSass />, color: "#cd6799" },
    { id: "ts", name: "Typescript", icon: <SiTypescript />, color: "#007acc" },
  ];
  return (
    <>
      <div className="skills__div">
        <ul className="skills">
          {tech.map((skill) => (
            <li className="skill" key={skill.id}>
              <span style={{ color: skill.color }} className="skill__icon">
                {skill.icon}
              </span>
              <span className="skill__name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
