import React from "react"
import { CountStateContext } from "../../components/context/GlobalCountProvider"
import { projectData } from "./ProjectData"
import Marker from "../Layout/Info/Marker/Marker"
import NavArrows from "../Layout/NavArrows/NavArrows"
import LinkArrow from "../Layout/Icons/LinkArrow"

const MobileProjects = () => {
  const count = React.useContext(CountStateContext)

  return (
    <div className="mobile-project-container">
      <div
        className="project-carousel"
        style={{
          transform: `translate(-${
            (100 / projectData.length) * count.count
          }%, 0)`,
        }}
      >
        {projectData.map((item, i) => (
          <div className="project-item" key={i}>
            <div className="project-header">
              <h2>
                {item.name} <LinkArrow />
              </h2>
              <span>{item.type}</span>
            </div>
            <div className="project-img-contain">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="project-nav">
        <Marker />
        <NavArrows />
      </div>
    </div>
  )
}

export default MobileProjects
