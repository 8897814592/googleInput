// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsdetails, updateInput} = props
  const {suggestion} = suggestionsdetails

  const onClickImage = () => {
    updateInput(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <button onClick={onClickImage}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
