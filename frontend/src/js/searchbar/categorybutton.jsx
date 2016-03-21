import React from 'react'

// TODO:
// * Outline the whole list and each individual list item
// * Fix first click not working bug
// * Add tick next to the current selected one
// * Default to the current selected one when you click off of the list

class CategoryButton extends React.Component {

  constructor () {
    super()
    this.state = { array: ['all departments'],
                   selected: 'all departments',
                   listOpen: false
                 }
    this.showArray = this.showArray.bind(this)
  }

  showArray (item) {
    const catArray = ['all departments', 'technology', 'computers', 'global', 'sport', 'garden', 'furniture', 'electric', 'clothing', 'men', 'television', 'women'].sort()
    this.state.listOpen = !this.state.listOpen
    if (!this.state.listOpen) {
      this.state.array = []
      catArray.map((i) => this.state.array.push(i))
    } else {
      this.state.selected = item
      this.state.array = [item]
    }
    this.setState(this.state)
  }

  render () {
    styles.backgroundColor = this.props.buttonColor
    styles.borderColor = this.props.buttonColor
    styles.display = (this.props.show) ? 'inline' : 'none'
    return (
      <ul style={styles}>
        {this.state.array.map((item, index) => {
          console.log(index, '<--index--')
          console.log(item, '<--item--')
          console.log(this.state.selected, '<----selected')
          return (
            <li onClick={this.showArray.bind(this, item)}>{item}</li>
          )
        })}
      </ul>
    )
  }
}

CategoryButton.propTypes = {
  buttonColor: React.PropTypes.string,
  show: React.PropTypes.bool
}

CategoryButton.defaultProps = {
  buttonColor: '#CCC',
  show: true
}

const styles = {
  margin: '0',
  padding: '5px 0',
  height: 'inherit',
  width: '8em',
  border: '5px solid',
  borderRadius: '5px 0px 0px 5px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flexGrow: 1,
  listStyle: 'none'
}

export default CategoryButton
