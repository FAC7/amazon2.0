import React from 'react'
import Category from './../js/itemCategory/Category.jsx'
import Header from './../js/Header/index.jsx'
import BottomFooter from './../js/footer/footer.js'

require('../css/grid.css')

class Home extends React.Component {

  constructor () {
    super()
    this.setResultsState = this.setResultsState.bind(this)
    this.categorySelect = this.categorySelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  setResultsState (results) {
    this.props.changeState({ // eslint-disable-line
      searchResults: results
    })
  }
  categorySelect (e) {
    this.props.changeState({category: e.target.value }) // eslint-disable-line
  }
  handleChange (e) {
   this.props.changeState({input: e.target.value }) // eslint-disable-line
  }

  render () {
    return (
      <div>
        <Header categorySelect={this.categorySelect} handleChange={this.handleChange} setResultsState={this.setResultsState}/>
        <Category />
        <BottomFooter />
      </div>
    )
  }
}

Home.propTypes = {
  route: React.PropTypes.object
}

export default Home
