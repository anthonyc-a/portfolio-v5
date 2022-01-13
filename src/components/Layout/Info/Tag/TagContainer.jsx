import React from "react"
import Tag from "./Tag"

const TagContainer = ({ tags }) => {
  return (
    <div className="tag-contain">
      {tags.map((tag, i) => (
        <Tag name={tag} />
      ))}
    </div>
  )
}

export default TagContainer
