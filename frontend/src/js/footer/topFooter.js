import React from 'react'

class TopFooter extends React.Component {
  render () {
    styles.width = this.props.width
    return (
      <div style={styles} >
        <h3>{this.props.heading}</h3>
        <ul style={ulStyles}>
          {this.props.data.map((item) => {
            return <li key={item.id} ><a href={item.link}>{item.content}</a></li>
          })}
        </ul>
      </div>
    )
  }
}

var styles = {
  verticalAlign: 'top',
  display: 'table-cell'
}

var ulStyles = {
  listStyle: 'none',
  padding: '0'
}

TopFooter.propTypes = {
  heading: React.PropTypes.string.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.string)).isRequired,
  width: React.PropTypes.string
}

export default TopFooter
