// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsdetails, updateInput} = props
  const {suggestion} = suggestionsdetails

  const onClickImage = () => {
    updateInput(suggestion)
  }
  return (
    <li className="item">
      <p>{suggestion}</p>
      <button type="button" onClick={onClickImage}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
