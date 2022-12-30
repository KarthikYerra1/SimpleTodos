import './index.css'

const TodoItem = props => {
  const {eachItem, onDeleteTodo} = props

  const {id, title} = eachItem

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
