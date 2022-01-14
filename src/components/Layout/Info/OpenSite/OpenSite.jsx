import React from "react"
import { projectData } from "../../../Projects/ProjectData"
import LinkArrow from "../../Icons/LinkArrow"

const OpenSite = ({ setCursorExpand, count }) => {
  return (
    <div className="open-site">
      <div className="site-name">{projectData[count.count].name}</div>

      {projectData[count.count].action === "open site" ? (
        <a
          href={projectData[count.count].url}
          target={"_blank"}
          rel="noreferrer"
          className="open-btn"
          onMouseEnter={() => {
            setCursorExpand(true)
          }}
          onMouseLeave={() => {
            setCursorExpand(false)
          }}
        >
          <div className="open-contain">
            <div className="open-txt">
              launch site
              <LinkArrow />
            </div>
          </div>
        </a>
      ) : (
        <span className="dev-btn"></span>
      )}
    </div>
  )
}

export default OpenSite
