import React from "react"
import Scrollbar from "./Scrollbar/Scrollbar"
import Marker from "./Marker/Marker"
import OpenSite from "./OpenSite/OpenSite"
import TagContainer from "./Tag/TagContainer"
import ToggleInfo from "./ToggleInfo/ToggleInfo"
import img1 from "../../../img/arch.png"
import img2 from "../../../img/arch1.png"
import img3 from "../../../img/arch2.png"

const Info = ({ infoActive, setInfoActive, setCursorExpand }) => {
  const refHeight = React.useRef()

  return (
    <div className={infoActive ? "info-contain active" : "info-contain"}>
      <div className="info-header">
        <Scrollbar ref={refHeight} />
        <Marker />
        <OpenSite setCursorExpand={setCursorExpand} />
        <ToggleInfo
          infoActive={infoActive}
          setInfoActive={setInfoActive}
          setCursorExpand={setCursorExpand}
        />
      </div>
      <div className="info-content" refHeight={refHeight}>
        <div className="info-img-contain">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div
          className={
            infoActive
              ? "info-description-contain active"
              : "info-description-contain"
          }
        >
          <h2>Archvizual</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolores mollitia architecto aliquid praesentium sunt veritatis
            labore, eos quidem incidunt quos? Error repellendus nemo asperiores.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem eaque voluptatibus id est facere. Delectus alias
            ducimus tempora maiores deserunt.
          </p>
          <TagContainer />
        </div>
      </div>
    </div>
  )
}

export default Info
