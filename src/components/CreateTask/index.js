import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import TagsList from '../TagsList'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTask extends Component {
  state = {
    tagItems: [],
    taskInput: '',
    selectOption: '',
    activeTag: '',
  }

  onChangeTagCategory = id => {
    this.setState({activeTag: id})

    console.log('onChangeTagCategory trigerred')
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
    console.log(event.target.value)
  }

  onChangeSelectOption = event => {
    this.setState({selectOption: event.target.value})
    console.log(event.target.value)
  }

  onAddingTask = event => {
    event.preventDefault()
    console.log('adding task trigerred')
    const {taskInput, selectOption} = this.state
    const newTask = {
      id: uuidv4(),
      task: taskInput,
      category: selectOption,
    }
    this.setState(prevState => ({
      tagItems: [...prevState.tagItems, newTask],
      taskInput: '',
      selectOption: '',
      activeTag: '',
    }))
  }

  render() {
    const {activeTag, tagItems} = this.state

    const filterTaskList =
      activeTag === ''
        ? tagItems
        : tagItems.filter(each => each.category === activeTag)

    return (
      <div className="main-container">
        <form className="first-container" onSubmit={this.onAddingTask}>
          <h1 className="create-task-heading">Create a Task!</h1>

          <label className="label" htmlFor="Task">
            Task
          </label>
          <input
            type="text"
            id="Task"
            className="input"
            onChange={this.onChangeTaskInput}
            placeholder="Enter the task here"
          />
          <label className="label" htmlFor="Tags">
            Tags
          </label>
          <select
            className="input"
            onChange={this.onChangeSelectOption}
            id="Tags"
          >
            {tagsList.map(eachTag => {
              return (
                <option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </option>
              )
            })}
          </select>
          <button className="add-btn">Add Task</button>
        </form>
        <div className="second-container">
          <h1 className="tags-heading">Tags</h1>
          <ul className="btn-container">
            {tagsList.map(eachTag => {
              return (
                <TagsList
                  key={eachTag.optionId}
                  buttonDetails={eachTag}
                  onChangeTagCategory={this.onChangeTagCategory}
                  isActive={activeTag === eachTag.optionId}
                  tagsList={tagsList}
                />
              )
            })}
          </ul>
          <h1 className="tags-heading">Tasks</h1>
          {filterTaskList.length === 0 ? (
            <p className="no-tasks">No Tasks Added Yet</p>
          ) : (
            tagItems.map(eachTag => {
              return (
                <ul>
                  <TagItem
                    key={eachTag.id}
                    tagDetails={eachTag}
                    onChangeTagCategory={this.onChangeTagCategory}
                  />
                </ul>
              )
            })
          )}
        </div>
      </div>
    )
  }
}

export default CreateTask
