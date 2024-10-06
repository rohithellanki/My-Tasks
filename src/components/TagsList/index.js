import {Component} from 'react'
import './index.css'

class TagsList extends Component {
  render() {
    const {buttonDetails, onChangeTagCategory, isActive} = this.props
    const {optionId, displayText} = buttonDetails

    const onChangeActiveButton = () => {
      onChangeTagCategory(optionId)
    }

    const activeTagClass = isActive ? 'active' : 'not-active'
    return (
      <li>
        <button
          className={`tag-btns ${activeTagClass}`}
          onClick={onChangeActiveButton}
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TagsList

/*

  <div className="btn-container">
            {tagsList.map(eachTag => {
              return <button className="tag-btn">{eachTag.displayText}</button>
            })}
          </div>


*/
