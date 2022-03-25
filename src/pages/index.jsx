import React from "react"
import "../styles/Index.css"
import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"
import MobileProjects from "../components/Projects/MobileProjects"
import Info from "../components/Layout/Info/Info"
import NavArrows from "../components/Layout/NavArrows/NavArrows"

export default function Work() {
  const [cursorExpand, setCursorExpand] = React.useState(false)
  const [infoActive, setInfoActive] = React.useState(false)

  return (
    <>
      <Layout
        infoActive={infoActive}
        setInfoActive={setInfoActive}
        cursorExpand={cursorExpand}
        setCursorExpand={setCursorExpand}
      >
        <NavArrows setCursorExpand={setCursorExpand} />
        <MobileProjects />
        <Projects setCursorExpand={setCursorExpand} />
        <Info
          infoActive={infoActive}
          setInfoActive={setInfoActive}
          setCursorExpand={setCursorExpand}
        />
      </Layout>
    </>
  )
}
