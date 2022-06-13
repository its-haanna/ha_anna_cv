import React from "react";

export default function Experience(props) {
  const experienceArray = props.experience

  const experience = experienceArray.map(exp => {
    return (
      <div className="experience" key={exp.name}>
        <h3>{exp.name}</h3>
        <div className="exp">
          <span className="exp-info"> {exp.position} </span>
          <span className="line" aria-hidden="true">|</span>
          <span className="exp-info date">{exp.start} - {exp.end}</span>
        </div>

        <ul className="exp-details">
          {exp.responsibilities.map(res => {

            return <li key={res} className="detail">{res} </li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <section aria-labelledby="experience">
      <h2 id="experience">{props.experience[0].id}</h2>
      {experience}
    </section>
  )
}