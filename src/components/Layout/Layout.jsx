import React from "react"
import Cursor from "./Cursor/Cursor"
import CursorDot from "./Cursor/CursorDot"
import Header from "./Header/Header"
import Seo from "./SEO/SEO"

const Layout = ({
  children,
  cursorExpand,
  setCursorExpand,
}) => {
  return (
    <>
      <Seo />
      <Cursor cursorExpand={cursorExpand} />
      <CursorDot />
      <Header setCursorExpand={setCursorExpand} />
      <main>{children}</main>
    </>
  )
}

export default Layout
