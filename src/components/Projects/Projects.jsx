import React from "react"
import { CountStateContext } from "../../components/context/GlobalCountProvider"
import { projectData } from "./ProjectData"
import LinkArrow from "../Layout/Icons/LinkArrow"

const Projects = ({ setCursorExpand }) => {
  const count = React.useContext(CountStateContext)
  const [selected, setSelected] = React.useState(null)

  return (
    <section className="project-container">
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
      </div>
    </section>
  )
}

export default Projects
