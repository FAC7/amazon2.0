import React from 'react'

const Description = (props) => <p>{props.description}</p>

Description.propTypes = {
  description: React.PropTypes.string.isRequired
}

export default Description
