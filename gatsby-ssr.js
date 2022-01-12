import React from "react"
import ToggleThemeProvider from "./src/components/context/ToggleThemeProveide"

export const wrapRootElement = ({ element }) => {
  return <ToggleThemeProvider>{element}</ToggleThemeProvider>
}
