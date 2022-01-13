import React from "react"
import "../styles/Index.css"
import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"

export default function Home() {
  const [cursorExpand, setCursorExpand] = React.useState(false)
  const [infoActive, setInfoActive] = React.useState(false)

  return (
    <Layout
      infoActive={infoActive}
      setInfoActive={setInfoActive}
      cursorExpand={cursorExpand}
      setCursorExpand={setCursorExpand}
    >
      <Projects setCursorExpand={setCursorExpand} />
    </Layout>
  )
}
