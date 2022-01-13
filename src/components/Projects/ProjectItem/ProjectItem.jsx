import React from "react"

const ProjectItem = ({ item }) => {
  return (
    <div className="project-item">
      <div className="project-header">
        <h2 className={item.selected}>{item.name}</h2>
        <span>{item.type}</span>
      </div>
      <a href={item.url} className="project-img-contain">
        <img src={item.img} alt={item.name} />
      </a>
    </div>
  )
}

export default ProjectItem
