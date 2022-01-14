import React from "react"

const Loader = props => {
  return (
    <div className="loader">
      <div className="loader-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 481.9 269.3"
          {...props}
        >
          <g>
            <path d="M239.2 46.6l-1.6 222.7-54.9-19.3.9-45.6-61.1-21.5L88.9 217l-48.7-17.1L239.2 0v46.6zM246.2 0l195.4 202.1-55.1 18.6-34.8-34-63.4 21.4.1 45.7-45 15.2 2.9-223.2-.1-45.8z" />
          </g>
        </svg>
        anthony animba
        <div className="loader-line"></div>
        <span>web designer</span>
      </div>
    </div>
  )
}

export default Loader
