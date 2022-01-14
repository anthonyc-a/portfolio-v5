import React from "react"
import Tag from "./Tag"

const TagContainer = ({ tags }) => {
  return (
    <div className="tag-contain">
      {tags.map((tag, i) => (
        <Tag name={tag} key={i}/>
      ))}
    </div>
  )
}

export default TagContainer
