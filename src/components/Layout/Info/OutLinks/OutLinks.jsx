import React from "react"
import { BsBehance, BsGithub } from "react-icons/bs"
import { projectData } from "../../../Projects/ProjectData"

const OutLinks = ({ setCursorExpand, count }) => {
  return (
    <div className="out-link-contain">
      {projectData[count.count].github === true && (
        <a
          href={projectData[count.count].github_link}
          target="_blank"
          rel="noreferrer"
          className={
            projectData[count.count].github_link
              ? "out-link-icon"
              : "out-link-icon inactive"
          }
          onMouseEnter={() => {
            setCursorExpand(true)
          }}
          onMouseLeave={() => {
            setCursorExpand(false)
          }}
        >
          <BsGithub size={18} />
        </a>
      )}
      {projectData[count.count].behance === true && (
        <a
          href="/"
          className={
            projectData[count.count].behance_link
              ? "out-link-icon"
              : "out-link-icon inactive"
          }
          onMouseEnter={() => {
            setCursorExpand(true)
          }}
          onMouseLeave={() => {
            setCursorExpand(false)
          }}
        >
          <BsBehance size={24} />
        </a>
      )}
    </div>
  )
}

export default OutLinks
