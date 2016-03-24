import React from 'react'

class CategoryButton extends React.Component {
  render () {
    styles.backgroundColor = this.props.buttonColor
    styles.borderColor = this.props.buttonColor
    styles.display = (this.props.show) ? 'inline' : 'none'
    var list = ['global'].concat(['technology', 'computers', 'sport',
    'garden', 'furniture', 'electric', 'clothing', 'men', 'women', 'television',
    'handhelds', 'perfumes'].sort())
    return (
      <select id='select' style={styles}>
        {list.map((item) => {
          return (
            <option value={item}>{item}</option>
          )
        })}
      </select>
    )
  }
}

CategoryButton.propTypes = {
  buttonColor: React.PropTypes.string,
  show: React.PropTypes.bool,
  categorySelect: React.PropTypes.func
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
