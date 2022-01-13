import React from "react"
import { projectData } from "../Projects/ProjectData"

export const CountStateContext = React.createContext()
export const CountDispatchContext = React.createContext()

const projectCount = projectData.length

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_COUNT": {
      return {
        ...state,
        count: state.count >= projectCount ? state.count : state.count + 1,
      }
    }

    default:
  }

  switch (action.type) {
    case "MINUS_COUNT": {
      return {
        ...state,
        count: state.count <= 0 ? state.count : state.count - 1,
      }
    }

    default:
  }
}

const GlobalCountProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}

export default GlobalCountProvider
