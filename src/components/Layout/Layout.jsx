import React from "react"
import Cursor from "./Cursor/Cursor"
import CursorDot from "./Cursor/CursorDot"
import Header from "./Header/Header"
import Info from "./Info/Info"
import NavArrows from "./NavArrows/NavArrows"
import Seo from "./SEO/SEO"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"

const Layout = ({
  children,
  infoActive,
  setInfoActive,
  cursorExpand,
  setCursorExpand,
}) => {
  return (
    <>
      <Seo />
      <Cursor cursorExpand={cursorExpand} />
      <CursorDot />
      <Header setCursorExpand={setCursorExpand} />
      <NavArrows
        setCursorExpand={setCursorExpand}
      />
      <main>{children}</main>
      <Info
        infoActive={infoActive}
        setInfoActive={setInfoActive}
        setCursorExpand={setCursorExpand}
      />
    </>
  )
}

export default Layout
