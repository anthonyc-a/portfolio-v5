import React from "react"
import Marker from "./Marker/Marker"
import OpenSite from "./OpenSite/OpenSite"
import TagContainer from "./Tag/TagContainer"
import ToggleInfo from "./ToggleInfo/ToggleInfo"
import Scrollbar from "./Scrollbar/Scrollbar"
import { projectData } from "../../Projects/ProjectData"
import { CountStateContext } from "../../context/GlobalCountProvider"
import OutLinks from "./OutLinks/OutLinks"

const Info = ({ infoActive, setInfoActive, setCursorExpand }) => {
  const count = React.useContext(CountStateContext)

  return (
    <div className={infoActive ? "info-contain active" : "info-contain"}>
      <div className="info-header">
        <Scrollbar />
        <Marker />
        <OpenSite setCursorExpand={setCursorExpand} count={count} />
        <ToggleInfo
          infoActive={infoActive}
          setInfoActive={setInfoActive}
          setCursorExpand={setCursorExpand}
        />
      </div>
      <div className="info-content">
        <div className="info-img-contain">
          <img src={projectData[count.count].img} alt="" />
          {projectData[count.count].img1 && (
            <img src={projectData[count.count].img1} alt="" />
          )}
          {projectData[count.count].img2 && (
            <img src={projectData[count.count].img2} alt="" />
          )}
          {projectData[count.count].img3 && (
            <img src={projectData[count.count].img3} alt="" />
          )}
          {projectData[count.count].img4 && (
            <img src={projectData[count.count].img4} alt="" />
          )}
        </div>
        <div
          className={
            infoActive
              ? "info-description-contain active"
              : "info-description-contain"
          }
        >
          <div className="info-description-header">
            <h2>{projectData[count.count].name}</h2>
          </div>
          <div className="info-description-content">
            <p>{projectData[count.count].description_intro}</p>
            {projectData[count.count].description ? (
              <p>{projectData[count.count].description}</p>
            ) : undefined}
          </div>
          <OutLinks setCursorExpand={setCursorExpand} count={count} />
          <TagContainer tags={projectData[count.count].tags} />
        </div>
      </div>
    </div>
  )
}

export default Info
