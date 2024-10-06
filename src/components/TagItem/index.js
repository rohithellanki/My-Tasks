import './index.css'

const TagItem = props => {
  const {tagDetails} = props
  const {task, category} = tagDetails
  return (
    <div>
      <li className="tag-li">
        <p className="tag-item-heading">{task}</p>
        <p className="category-item">{category}</p>
      </li>
    </div>
  )
}
export default TagItem
