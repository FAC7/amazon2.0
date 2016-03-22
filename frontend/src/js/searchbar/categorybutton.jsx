import React from 'react'

// TODO:
// * Outline the whole list and each individual list item
// * Fix first click not working bug
// * Add tick next to the current selected one
// * Default to the current selected one when you click off of the list

class CategoryButton extends React.Component {
  render () {
    styles.backgroundColor = this.props.buttonColor
    styles.borderColor = this.props.buttonColor
    styles.display = (this.props.show) ? 'inline' : 'none'
    return (
      <ul style={styles}>
        {this.props.array.map((item, index) => {
          return (
            <li onClick={this.props.showArray.bind(this, item)}>{item}</li>
          )
        })}
      </ul>
    )
  }
}

CategoryButton.propTypes = {
  buttonColor: React.PropTypes.string,
  show: React.PropTypes.bool,
  showArray: React.PropTypes.func.isRequired
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
