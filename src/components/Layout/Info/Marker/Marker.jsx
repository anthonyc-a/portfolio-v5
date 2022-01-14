import React from "react"
import { projectData } from "../../../Projects/ProjectData"
import { CountStateContext } from "../../../context/GlobalCountProvider"

const Marker = () => {
  const count = React.useContext(CountStateContext)

  const markerDupe = () => {
    var markerList = []
    for (var i = 0; i < projectData.length; i++) {
      markerList.push(
        <div
          className={count.count === i ? "marker-item active" : "marker-item"}
          key={i}
        ></div>
      )
    }
    return markerList
  }
  return <div className="marker">{markerDupe()}</div>
}

export default Marker
