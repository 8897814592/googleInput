// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="image-container ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image1"
          />
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="image"
              />
              <input
                type="search"
                placeholder="search google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul>
              {searchResults.map(eachList => (
                <SuggestionItem
                  suggestionsdetails={eachList}
                  key={eachList.id}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
