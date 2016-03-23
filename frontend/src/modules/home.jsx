import React from 'react'
import Category from './../js/itemCategory/Category.jsx'
import Header from './../js/Header/index.jsx'
import BottomFooter from './../js/footer/footer.js'

require('../css/grid.css')

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header search={this.props.route.search} categorySelect={this.props.route.categorySelect} handleChange={this.props.route.handleChange} />
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
