import React from "react"
import Cursor from "./Cursor/Cursor"
import CursorDot from "./Cursor/CursorDot"
import Header from "./Header/Header"
import Info from "./Info/Info"
import NavArrows from "./NavArrows/NavArrows"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"

const Layout = ({ children, infoActive, setInfoActive }) => {
  return (
    <>
      <Cursor />
      <CursorDot />
      <Header />
      <ThemeSwitch />
      <NavArrows />
      <main>{children}</main>
      <Info infoActive={infoActive} setInfoActive={setInfoActive} />
    </>
  )
}

export default Layout
