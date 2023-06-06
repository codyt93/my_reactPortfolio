import React from 'react';
const projects = [
  {
    name:"project1",
    description:"description",
    image:"project1.jpg",
    link:"www.github.com",
  },
  {
    name:"project1",
    description:"description",
    image:"project1.jpg",
    link:"www.github.com",
  }
]
export default function Projects() {
  return (
    <div>
     {projects.map(project =>(
      <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <img src={"./images/"+project.image} alt="" />
      <a href={project.link}>project link</a>
      </div>
     ))}
    </div>
  );
}
