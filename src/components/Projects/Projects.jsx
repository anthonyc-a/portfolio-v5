import React from "react"
import { projectData } from "./ProjectData"
import LinkArrow from "../Layout/Icons/LinkArrow"
import NavArrows from "../Layout/NavArrows/NavArrows"
import Marker from "../Layout/Info/Marker/Marker"

const Projects = ({ setCursorExpand }) => {
  const [selected, setSelected] = React.useState(null)
  const projItem = React.useRef()

  return (
    <section className="project-container">
      <div className="project-carousel">
        {projectData.map((item, i) => (
          <div className="project-item" key={i} ref={projItem}>
            <div className="project-header">
              <h2 className={item.selected}>
                {item.name}{" "}
                <LinkArrow/>
              </h2>
              <span>{item.type}</span>
            </div>
            <div
              className="project-img-contain"
              onMouseEnter={() => {
                setSelected(i)
              }}
              onMouseLeave={() => {
                setSelected(null)
              }}
              role={"none"}
            >
              {item.action === "open site" ? (
                <a
                  href={item.url}
                  target={"_blank"}
                  rel="noreferrer"
                  className={
                    selected === i ? "action-preview active" : "action-preview"
                  }
                  onMouseEnter={() => {
                    setCursorExpand(true)
                  }}
                  onMouseLeave={() => {
                    setCursorExpand(false)
                  }}
                >
                  {item.action}
                </a>
              ) : (
                <div
                  className={
                    selected === i ? "action-preview active" : "action-preview"
                  }
                >
                  {item.action}
                </div>
              )}

              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
        <div className="project-nav">
          <Marker />
          <NavArrows />
        </div>
      </div>
    </section>
  )
}

export default Projects
