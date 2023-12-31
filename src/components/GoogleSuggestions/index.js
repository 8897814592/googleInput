// Write your code here
import {Component} from 'react'

import SuggestionItem from './components/SuggestionItem'
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

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div>
          <input type="search" onClick={this.onChangeSearchInput} />
          <ul>
            {suggestionsList.map(eachList => (
              <SuggestionItem
                suggestionsdetails={eachList}
                key={eachList.id}
                updateInput={this.updateInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
