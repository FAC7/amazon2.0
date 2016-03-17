import React from 'react'

class TopFooter extends React.Component{
  render () {
    return (
      <div>
        <h6>{this.props.heading}</h6>
        <ul>
          {this.props.data.map((item) => {
            return <li><a href={item.link}>{item.content}</a></li>
          })}
        </ul>
      </div>
    )
  }
}

TopFooter.propTypes = {
  heading: React.PropTypes.string.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.string)).isRequired
}

export default TopFooter
